
 document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        height: 550,

        customButtons: {
            inicio: {
              text: 'Inicio',
              click: function() {
                window.location="inicio.html";
              }
            }
          },


        headerToolbar: {
            left: 'prev',
            center: 'title',
            right : 'next'
        },

        footerToolbar: {
            left: '',
            center: 'inicio',
            right : ''
        },


        contentHeight: 200,
        eventColor: 'green',
        locale: 'es',
        buttonIcons: true,
        showNonCurrentDates: false,

                 events: [

                {
                    title: 'Mercedes',
                    start: '2021-03-05',
                    end: '2021-03-05',
                    color: 'pink',
                    textColor: 'black',
                },

                

                {
                    title: 'Oscar',
                    start: '2021-03-26',
                    end: '2021-03-26',
                    color: '#aede87',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes',
                    start: '2021-01-11',
                    end: '2021-01-18',
                    color: 'pink',
                    textColor: 'black'
                },

                {
                    title: 'Angel baja',
                    start: '2021-01-25',
                    end: '2021-02-11',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Rocío',
                    start: '2021-01-25',
                    end: '2021-02-08',
                    color: '#8f3241',
                    textColor: 'white'
                },

                {
                    title: 'Rocío Días',
                    start: '2021-01-19',
                    end: '2021-01-25',
                    color: '#8f3241',
                    textColor: 'white'
                },

                {
                    title: 'Alfonso baja',
                    start: '2021-01-19',
                    end: '2021-01-19',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Laura',
                    start: '2021-03-08',
                    end: '2021-03-08',
                    color: 'green',
                    textColor: 'white'
                },
{
                    title: 'Laura baja',
                    start: '2021-03-09',
                    end: '2021-03-29',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Ignacio',
                    start: '2021-02-22',
                    end: '2021-03-08',
                    color: 'blue',
                    textColor: 'white'
                },

                {
                    title: 'Lourdes',
                    start: '2021-02-15',
                    end: '2021-02-29',
                    color: '#b565ac',
                    textColor: 'white'
                    }
                         ]
      
      
    });
    calendar.render();
  });
