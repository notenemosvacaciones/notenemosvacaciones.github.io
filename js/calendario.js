
 document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {

        height: '100%',

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
            right : 'inicio next'
        },

        footerToolbar: {
            left: 'prev',
            center: 'title',
            right : 'inicio next'
        },


        contentHeight: "auto",
        eventColor: 'green',
        locale: 'es',
        buttonIcons: true,
        showNonCurrentDates: true,

                 events: [

                {
                    title: 'Alfonso baja',
                    start: '2021-01-19',
                    end: '2021-05-11',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Angel baja',
                    start: '2021-01-25',
                    end: '2021-02-11',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Angel día',
                    start: '2021-04-15',
                    end: '2021-04-15',
                    color: 'red',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel',
                    start: '2021-05-31',
                    end: '2021-06-21',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'David Rejón día',
                    start: '2021-05-06',
                    end: '2021-05-06',
                    color: '#996633',
                    textColor: 'white'
                },

                {
                    title: 'David Rejón',
                    start: '2021-09-20',
                    end: '2021-10-04',
                    color: '#996633',
                    textColor: 'white'
                },

                {
                    title: 'Ignacio Invierno',
                    start: '2021-02-22',
                    end: '2021-03-08',
                    color: 'blue',
                    textColor: 'white'
                },

                {
                    title: 'Laura día',
                    start: '2021-03-08',
                    end: '2021-03-08',
                    color: 'green',
                    textColor: 'white'
                },
                
                {
                    title: 'Laura baja',
                    start: '2021-03-09',
                    end: '2021-04-14',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Laura Invierno',
                    start: '2021-04-19',
                    end: '2021-05-03',
                    color: 'green',
                    textColor: 'white'
                },

                {
                    title: 'Laura Verano',
                    start: '2021-10-11',
                    end: '2021-10-25',
                    color: 'green',
                    textColor: 'white'
                },

                {
                    title: 'Lourdes Invierno',
                    start: '2021-02-15',
                    end: '2021-02-29',
                    color: '#b565ac',
                    textColor: 'white'
                },

                {
                    title: 'Mayte baja',
                    start: '2021-01-01',
                    end: '2021-05-10',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Mercedes Invierno',
                    start: '2021-01-11',
                    end: '2021-01-18',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes horas',
                    start: '2021-03-05',
                    end: '2021-03-05',
                    color: '#ff33ff',
                    textColor: 'black',
                },

                {
                    title: 'Mercedes horas',
                    start: '2021-04-16',
                    end: '2021-04-16',
                    color: '#ff33ff',
                    textColor: 'black',
                },

                {
                    title: 'Mercedes horas',
                    start: '2021-05-07',
                    end: '2021-05-07',
                    color: '#ff33ff',
                    textColor: 'black',
                },

                {
                    title: 'Mercedes Invierno',
                    start: '2021-06-21',
                    end: '2021-06-28',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes días',
                    start: '2021-06-28',
                    end: '2021-07-05',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes Verano',
                    start: '2021-08-23',
                    end: '2021-09-06',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mihaly día',
                    start: '2021-05-06',
                    end: '2021-05-06',
                    color: '#4D0000',
                    textColor: 'white'
                },

                {
                    title: 'Oscar día',
                    start: '2021-03-26',
                    end: '2021-03-26',
                    color: '#aede87',
                    textColor: 'black'
                },

                {
                    title: 'Oscar Invierno',
                    start: '2021-05-17',
                    end: '2021-05-31',
                    color: '#00ffcc',
                    textColor: 'black'
                },

                {
                    title: 'Oscar días',
                    start: '2021-07-05',
                    end: '2021-07-12',
                    color: '#00ffcc',
                    textColor: 'black'
                },

                {
                    title: 'Oscar Verano',
                    start: '2021-08-30',
                    end: '2021-09-13',
                    color: '#00ffcc',
                    textColor: 'black'
                },

                {
                    title: 'Rocío Días',
                    start: '2021-01-19',
                    end: '2021-01-25',
                    color: '#8f3241',
                    textColor: 'white'
                },

                {
                    title: 'Rocío Invierno',
                    start: '2021-01-25',
                    end: '2021-02-08',
                    color: '#8f3241',
                    textColor: 'white'
                },

                {
                    title: 'Rocío Verano',
                    start: '2021-08-02',
                    end: '2021-08-16',
                    color: '#8f3241',
                    textColor: 'white'
                }

               
                         ]
      
      
    });
    calendar.render();
  });
