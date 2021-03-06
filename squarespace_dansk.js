//<!-- C-System.dk script til at oversætte blog dato til dansk-->
//<script type="text/javascript">
   // Danske måneder
   const month = new Array(12);
    month[0] = 'januar'; month[1] = 'februar'; month[2] = 'marts';
    month[3] = 'april'; month[4] = 'maj'; month[5] = 'juni';
    month[6] = 'juli'; month[7] = 'august'; month[8] = 'september';
    month[9] = 'oktober'; month[10] = 'november'; month[11] = 'december';
        
        Y.use('node', 'node-load', (Y) => {
        Y.on('domready', () => {
        // Oversætter småting til dansk
        Y.all('.ss-social-button').setHTML('<span class="ss-social-button-icon"></span>Del');
        Y.all('.inline-read-more').setHTML('Læs mere&hellip;');
        Y.all('.newer-posts').setHTML('Næste');
        Y.all('.older-posts').setHTML('Forrige');

        // Sætter tiden til dansk på blogsiden
        Y.all('time.published').each(
         function () {
           const pdate = new Date(this.getAttribute('datetime'));
           this.setHTML(`${pdate.getDate()} ${month[pdate.getMonth()]} ${pdate.getFullYear()}`);
         }
        ); 
        // Sætter tiden til dansk på nyhedsbloggen på forsiden
       Y.all('time.summary-metadata-item--date').each(
         function () {
           const tdate = new Date(this.getAttribute('datetime'));
           this.setHTML(`${tdate.getDate()} ${month[tdate.getMonth()]} ${tdate.getFullYear()}`);
         }
        ); 
        // Sætter tiden til dansk på flere undersider
        Y.all('time.timestamp').each(
         function () {
           const tdate = new Date(this.getAttribute('datetime'));
           this.setHTML(`${tdate.getDate()} ${month[tdate.getMonth()]} ${tdate.getFullYear()}`);
         }
        );
        // Oversætter Like og Likes kræver jquery
          $('span').children().each(function () {
          $(this).html($(this).html().split('Likes').join('Synes godt om'));
        }
        );
          $('span').children().each(function () {
          $(this).html($(this).html().split('Like').join('Synes godt om'));
         }
        );       
     }); 
   });

 //</script>
 //<!-- END C-System.dk script til at oversætte blog dato til dansk  -->
