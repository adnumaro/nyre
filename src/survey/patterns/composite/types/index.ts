import Name from './Name'
import Title from './Title'
import Elements from './Elements'
import ImageUrl from './ImageUrl'
import Color from './Color'
import ChoiceMap from './ChoiceMap'
import Rules from './Rules'

enum CompositeTypes {
  PAGES = 'pages',
  PAGE = 'page',
  PANEL = 'panel'
}

enum LeafTypes {
  TEXT = 'text',
  RADIOBUTTON = 'radiobutton',
  CHECKBOX = 'checkbox'
}

export {
  CompositeTypes,
  LeafTypes,
  Name,
  Title,
  Elements,
  ImageUrl,
  Color,
  ChoiceMap,
  Rules
}
