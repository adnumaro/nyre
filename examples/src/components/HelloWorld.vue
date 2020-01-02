<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  mounted () {
    const tree = this.$nyre.SurveyBuilder
      .fromJson(
        {
          type: 'pages',
          backgroundImage: 'https://198.162.200.4/wp-content/uploads/2017/11/star-wars-the-last-jedi-millenium-falcon-image.jpg',
          backgroundColor: 'rgba(255, 255, 255, .1)',
          elements: [{
            name: 'page1',
            type: 'page',
            elements: [{
              name: 'tienes_un_seat',
              type: 'radiobutton',
              title: '¿Tienes un Seat?',
              choices: [{
                key: 'Key',
                value: 'Value'
              }],
              isRequired: true
            }, {
              name: 'Modelo',
              type: 'radiobutton',
              title: 'Modelo',
              data: '',
              choices: [{
                key: 'Tarraco',
                value: 'Modelos Tarraco'
              }, {
                key: 'Ateca',
                value: 'Modelos Ateca'
              }, {
                key: 'Leon',
                value: 'Modelos Leon'
              }, {
                key: 'Ibiza',
                value: 'Modelos Ibiza'
              }, {
                key: 'Alhambra',
                value: 'Modelos Alhambra'
              }, {
                key: 'Cupra',
                value: 'Modelos Cupra'
              }, {
                key: 'Mii',
                value: 'Modelos Mii'
              }, {
                key: 'TGI',
                value: 'Modelos TGI'
              }, {
                key: 'other',
                value: 'otro'
              }],
              visibleIf: '{tienes_un_seat} = "Si"',
              isRequired: true
            }]
          }, {
            name: 'page2',
            type: 'page',
            elements: [{
              name: 'panel1',
              type: 'panel',
              title: 'Valoración del Encuentro',
              elements: [{
                name: 'comunicacion_porque',
                type: 'text',
                title: '¿Por qué?',
                visibleIf: '{comunicaciones} <= "3"',
                isRequired: true
              }]
            }]
          }]
        }
      )

    console.log(tree)
  }
}
</script>
