let queryUrl = "https://api.nasa.gov/planetary/apod?";
    //Guardar API KEY ACÁ
    let queryKey = "api_key=ZeOa1oNaH8R1ThtT5WEsTYl8wdk0sY7aTV4KIdMn";
    let fullUrl = queryUrl + queryKey;
    let queryDate = "date=" + "2021-02-11" + "&";

    $(document).ready(function nasaRequest() {
      $.ajax({
          url: fullUrl,
          type: "GET",
          success: function (data) {
            console.log(data);
            let title = data.copyright;
            let date = data.date;
            let explanation = data.explanation;
            let hdurl = data.hdurl;
            let media_type = data.media_type;
            let service_version = data.service_version;
            let image = data.url;

            document.getElementById('image').src = image;
            document.getElementById('title').innerHTML = title;
            document.getElementById('subtitle').innerHTML = date;
            document.getElementById('explanation').innerHTML = explanation;
            document.getElementById('hdrul').innerHTML = hdurl;
            document.getElementById('media_type').innerHTML = media_type;
            document.getElementById('service_version').innerHTML = service_version;
          },
          error: function (error) {
            console.log('Error');
          }
        })
      })
      let hoy = new Date();
      let semanaEnMilisegundos = 1000 * 60 * 60 * 24 * 7;
      let suma = hoy.getTime() - semanaEnMilisegundos;
      let fechaHaceUnaSemana = new Date(suma);
      document.getElementById('datepicker').valueAsDate = hoy;

      datepicker.addEventListener('input',(e) => {
        datepicker.textContent = datepicker.value;
        alert(datepicker.value);
        nasaRequest();
      });

      const Url = fullUrl;


    nasaRequest().onload;