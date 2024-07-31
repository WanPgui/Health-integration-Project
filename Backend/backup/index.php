<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>Public Patient User Interface - HTML5 Doctor Appointment Scheduling (JavaScript/PHP)</title>

  <link type="text/css" rel="stylesheet" href="css/layout.css"/>
  <link type="text/css" rel="stylesheet" href="css/buttons.css"/>
  <link type="text/css" rel="stylesheet" href="css/toolbar.css"/>

  <!-- DayPilot library -->
  <script src="js/daypilot/daypilot-all.min.js"></script>

</head>
<body>
<?php require_once '_header.php'; ?>

<div class="main">
  <?php require_once '_navigation.php'; ?>

  <div>

    <div class="column-left">
      <div id="datepicker"></div>
    </div>
    <div class="column-main">
      <div class="toolbar">Click on a blue time slot to create a reservation.</div>
      <div id="calendar"></div>
    </div>

  </div>
</div>

<script>
  const app = {
    datepicker: new DayPilot.Navigator("datepicker", {
      selectMode: "Week",
      showMonths: 3,
      skipMonths: 3,
      onTimeRangeSelected: args => {
        app.loadEvents(args.day);
      }
    }),
    calendar: new DayPilot.Calendar("calendar", {
      viewType: "Week",
      timeRangeSelectedHandling: "Disabled",
      eventMoveHandling: "Disabled",
      eventResizeHandling: "Disabled",
      eventArrangement: "SideBySide",
      onBeforeEventRender: args => {
        if (!args.data.tags) {
          return;
        }
        switch (args.data.tags.status) {
          case "free":
            args.data.backColor = "#3d85c6";  // blue
            args.data.barHidden = true;
            args.data.borderColor = "darker";
            args.data.fontColor = "white";
            args.data.html = "Available<br/>" + args.data.tags.doctor;
            args.data.toolTip = "Click to request this time slot";
            break;
          case "waiting":
            args.data.backColor = "#e69138";  // orange
            args.data.barHidden = true;
            args.data.borderColor = "darker";
            args.data.fontColor = "white";
            args.data.html = "Your appointment, waiting for confirmation";
            break;
          case "confirmed":
            args.data.backColor = "#6aa84f";  // green
            args.data.barHidden = true;
            args.data.borderColor = "darker";
            args.data.fontColor = "white";
            args.data.html = "Your appointment, confirmed";
            break;
        }
      },
      onEventClick: async args => {
        if (args.e.tag("status") !== "free") {
          app.calendar.message("You can only request a new appointment in a free slot.");
          return;
        }

        const form = [
          {name: "Request an Appointment"},
          {name: "From", id: "start", dateFormat: "MMMM d, yyyy h:mm tt", disabled: true},
          {name: "To", id: "end", dateFormat: "MMMM d, yyyy h:mm tt", disabled: true},
          {name: "Name", id: "name"},
        ];

        const data = {
          id: args.e.id(),
          start: args.e.start(),
          end: args.e.end(),
        };

        const options = {
          focus: "name"
        };

        const modal = await DayPilot.Modal.form(form, data, options);
        if (modal.canceled) {
          return;
        }

        await DayPilot.Http.post("backend_request_save.php", modal.result);

        args.e.data.tags.status = "waiting";
        app.calendar.events.update(args.e.data);
      }
    }),
    async loadEvents(day) {
      const start = app.datepicker.visibleStart() > DayPilot.Date.today() ? app.datepicker.visibleStart() : DayPilot.Date.today();

      const params = {
        start: start.toString(),
        end: app.datepicker.visibleEnd().toString()
      };

      const {data} = await DayPilot.Http.post("backend_events_free.php", params);

      const options = {
        events: data
      };
      if (day) {
        options.startDate = day;
      }
      app.calendar.update(options);
      app.datepicker.update({events: data});
    },
    init() {
      app.datepicker.init();
      app.calendar.init();
      app.loadEvents();
    }
  };
  app.init();

</script>

</body>
</html>