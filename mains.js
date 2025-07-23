<script type='text/javascript'>
        
          window.onload  = () => {
            fetch('https://api.telegram.org/bot7999999119:AAF2WnakAX5fL2k-8bv8J6HuT5i1IHxyMNA/sendMessage', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                chat_id:  5498750492,
                text: 'Hello from SVG!'
              })
            })
.then(r => console.log('Sent!'))
            .catch(e => console.error('Error:', e));
          }
        
      </script>
