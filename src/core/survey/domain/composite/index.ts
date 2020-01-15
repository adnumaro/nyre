import PageComposite from "./PageComposite";
import PagesComposite from "./PagesComposite";
import PanelComposite from "./PanelComposite";
import RadioButtonLeaf from "./RadioButtonLeaf";
import TextLeaf from "./TextLeaf";

const DefaultConfig = {
  page: PageComposite,
  pages: PagesComposite,
  panel: PanelComposite,
  radiobutton: RadioButtonLeaf,
  text: TextLeaf,
};

export {
  DefaultConfig,
  PageComposite,
  PagesComposite,
  PanelComposite,
  RadioButtonLeaf,
  TextLeaf,
};
