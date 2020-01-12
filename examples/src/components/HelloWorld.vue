<template>
  <div class="hello">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  mounted () {
    const content1 = {
      type: 'pages',
      backgroundImage: 'https://198.162.200.4/wp-content/uploads/2017/11/star-wars-the-last-jedi-millenium-falcon-image.jpg',
      backgroundColor: 'rgb( 255, 255,255)',
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
          }]
        }]
      }]
    }

    const content2 = {
      type: 'pages',
      backgroundImage: 'https://198.162.200.4/another-image-content.png',
      backgroundColor: 'rgb( 255, 255,255)',
      elements: [{
        name: 'Page 1',
        type: 'page',
        elements: [{
          name: 'tienes_un_seat',
          type: 'radiobutton',
          title: '¿Tienes un Seat?',
          choices: [{
            key: 'Key',
            value: 'Value'
          }]
        }]
      }]
    }

    const content3 = {
      type: 'pages',
      backgroundImage: 'https://198.162.200.4/final-image.jpeg',
      backgroundColor: 'rgb( 255, 255,255)',
      elements: [{
        name: 'Page 1',
        type: 'page',
        elements: [{
          name: 'tienes_un_seat',
          type: 'radiobutton',
          title: '¿Tienes un Seat?',
          choices: [{
            key: 'Key',
            value: 'Value'
          }]
        }]
      }, {
        name: 'Page 2',
        type: 'page',
        elements: [{
          name: 'Panel 1',
          type: 'panel',
          title: 'Valoración del Encuentro',
          elements: [{
            name: 'comunicacion_porque',
            type: 'text',
            title: '¿Por qué?'
          }]
        }]
      }]
    }

    this.$nyre.survey.notify('add-pages', content1)

    console.log('Content 1', this.$nyre.survey.getTree())

    this.$nyre.survey.notify('add-pages', content2)

    console.log('Content 2', this.$nyre.survey.getTree())

    this.$nyre.survey.undo()

    console.log('Restore Content 1', this.$nyre.survey.getTree())

    this.$nyre.survey.notify('add-pages', content3)

    console.log('Restore Content 3', this.$nyre.survey.getTree())

    this.$nyre.survey.undo()

    console.log('Restore Content 2', this.$nyre.survey.getTree())
  }
}
</script>
