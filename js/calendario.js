
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
                    title: 'Alfonso Verano',
                    start: '2021-08-16',
                    end: '2021-08-23',
                    color: '#3d3d29',
                    textColor: 'white'
                },

                {
                    title: 'Angel baja',
                    start: '2021-01-25',
                    end: '2021-02-09',
                    color: 'red',
                    textColor: 'white'
                },

                {
                    title: 'Angel día',
                    start: '2021-02-09',
                    end: '2021-02-09',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel día',
                    start: '2021-02-10',
                    end: '2021-02-10',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel día',
                    start: '2021-04-15',
                    end: '2021-04-09',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel 2020',
                    start: '2021-05-31',
                    end: '2021-06-07',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel Invierno',
                    start: '2021-06-07',
                    end: '2021-06-21',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel Semana 1 de 8',
                    start: '2021-07-12',
                    end: '2021-07-19',
                    color: '#cc6600',
                    textColor: 'white'
                }, 

                {
                    title: 'Angel Verano',
                    start: '2021-09-20',
                    end: '2021-09-27',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 2 de 8',
                    start: '2021-09-27',
                    end: '2021-10-04',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 3 de 8',
                    start: '2021-10-04',
                    end: '2021-10-11',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 4 de 8',
                    start: '2021-10-25',
                    end: '2021-11-01',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 5 de 8',
                    start: '2021-11-01',
                    end: '2021-11-08',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 6 de 8',
                    start: '2021-11-08',
                    end: '2021-11-15',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 7 de 8',
                    start: '2021-11-15',
                    end: '2021-11-22',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Semana 8 de 8',
                    start: '2021-11-22',
                    end: '2021-11-29',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'Angel Verano',
                    start: '2021-11-29',
                    end: '2021-12-06',
                    color: '#cc6600',
                    textColor: 'white'
                },

                {
                    title: 'David Arias Verano',
                    start: '2021-09-13',
                    end: '2021-09-27',
                    color: '#ffc2b3',
                    textColor: 'black'
                },

                {
                    title: 'David Rejón día',
                    start: '2021-05-06',
                    end: '2021-05-06',
                    color: '#996633',
                    textColor: 'white'
                },

                {
                    title: 'David Rejón Verano',
                    start: '2021-07-19',
                    end: '2021-08-02',
                    color: '#996633',
                    textColor: 'white'
                },

                {
                    title: 'David Rejón baja',
                    start: '2021-08-10',
                    end: '2021-08-10',
                    color: '#996633',
                    textColor: 'white'
                },

                {
                    title: 'Fran Invierno',
                    start: '2021-06-28',
                    end: '2021-07-12',
                    color: '#bbff99',
                    textColor: 'black'
                },

                {
                    title: 'Fran Verano',
                    start: '2021-08-23',
                    end: '2021-09-06',
                    color: '#bbff99',
                    textColor: 'black'
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
                    title: 'Laura día',
                    start: '2021-07-23',
                    end: '2021-07-23',
                    color: 'green',
                    textColor: 'white'
                },

                {
                    title: 'Laura día',
                    start: '2021-08-06',
                    end: '2021-08-06',
                    color: 'green',
                    textColor: 'white'
                },

                {
                    title: 'Laura baja',
                    start: '2021-08-10',
                    end: '2021-08-10',
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
                    title: 'Lourdes Verano',
                    start: '2021-08-02',
                    end: '2021-08-16',
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
                    title: 'Mayte baja',
                    start: '2021-05-31',
                    end: '2021-08-30',
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
                    title: 'Mercedes horas',
                    start: '2021-05-21',
                    end: '2021-05-21',
                    color: '#ff33ff',
                    textColor: 'black',
                },

                {
                    title: 'Mercedes horas',
                    start: '2021-05-28',
                    end: '2021-05-28',
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
                    title: 'Mercedes horas',
                    start: '2021-06-28',
                    end: '2021-07-05',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes horas',
                    start: '2021-07-30',
                    end: '2021-07-30',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes día',
                    start: '2021-08-02',
                    end: '2021-08-02',
                    color: '#ff33ff',
                    textColor: 'black'
                },

                {
                    title: 'Mercedes día',
                    start: '2021-08-03',
                    end: '2021-08-02',
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
                    title: 'Mihaly medio día',
                    start: '2021-06-01',
                    end: '2021-06-01',
                    color: '#4D0000',
                    textColor: 'white'
                },

                {
                    title: 'Mihaly medio día',
                    start: '2021-06-17',
                    end: '2021-06-17',
                    color: '#4D0000',
                    textColor: 'white'
                },

                {
                    title: 'Mihaly Verano',
                    start: '2021-06-24',
                    end: '2021-07-05',
                    color: '#4D0000',
                    textColor: 'white'
                },

                {
                    title: 'Mihaly baja',
                    start: '2021-08-05',
                    end: '2021-08-05',
                    color: 'red',
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
                    start: '2021-09-06',
                    end: '2021-09-20',
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
                    start: '2021-08-09',
                    end: '2021-08-23',
                    color: '#8f3241',
                    textColor: 'white'
                }

               
                         ]
      
      
    });
    calendar.render();
  });
