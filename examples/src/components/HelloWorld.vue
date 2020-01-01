<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation
      </a>
      .
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint
        </a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          rel="noopener"
        >Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          rel="noopener"
        >Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
        >Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          rel="noopener"
        >Twitter
        </a>
      </li>
      <li>
        <a
          href="https://news.vuejs.org"
          target="_blank"
          rel="noopener"
        >News
        </a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://router.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-router
        </a>
      </li>
      <li>
        <a
          href="https://vuex.vuejs.org"
          target="_blank"
          rel="noopener"
        >vuex
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools
        </a>
      </li>
      <li>
        <a
          href="https://vue-loader.vuejs.org"
          target="_blank"
          rel="noopener"
        >vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
        >awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted () {
    const tree = this.$nyre.SurveyBuilder
      .fromJson(
        {
          type: 'pages',
          backgroundImage: 'https://198.162.200.4/wp-content/uploads/2017/11/star-wars-the-last-jedi-millenium-falcon-image.jpg',
          backgroundColor: 'rgb( 255 , 255 , 255 )',
          elements: [{
            name: 'page1',
            type: 'page',
            elements: [{
              name: 'tienes_un_seat',
              type: 'radiobutton',
              title: '¿Tienes un Seat?',
              choices: [{key: '', value: ''}],
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

    console.log(tree.toJson())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style
  scoped
  lang="scss"
>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
