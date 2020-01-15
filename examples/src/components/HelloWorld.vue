<template>
  <div class="hello">
    <button @click="undo">Undo</button>
    <button @click="addContent1">Add Content 1</button>
    <button @click="addContent2">Add Content 2</button>
    <button @click="addContent3">Add Content 3</button>

    <div style="margin-top: 50px;text-align: left;">
      <pre>
        <code>
          {{ tree }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import { undefined } from 'io-ts'
export default {
  name: 'HelloWorld',

  data () {
    return {
      tree: {}
    }
  },

  methods: {
    addContent (content) {
      this.$nyre.survey.notify('add-pages', content)
      this.tree = JSON.stringify(this.$nyre.survey.getTree().toJson(), null, '\t')
    },

    addContent1 () {
      this.addContent({
        type: 'pages',
        backgroundImage: 'https://198.162.200.4/content-1.jpg',
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
      })
    },

    addContent2 () {
      this.addContent({
        type: 'pages',
        backgroundImage: 'https://198.162.200.4/content-2.png',
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
      })
    },

    addContent3 () {
      this.addContent({
        type: 'pages',
        backgroundImage: 'https://198.162.200.4/fcontent-3.jpeg',
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
      })
    },

    undo () {
      this.$nyre.survey.undo()

      this.tree = JSON.stringify(this.$nyre.survey.getTree().toJson(), null, '\t')
    }
  }
}
</script>
