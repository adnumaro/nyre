import PageComposite from "@/survey/composite/PageComposite";
import PagesComposite from "@/survey/composite/PagesComposite";
import PanelComposite from "@/survey/composite/PanelComposite";
import RadioButtonLeaf from "@/survey/composite/RadioButtonLeaf";
import TextLeaf from "@/survey/composite/TextLeaf";

const DefaultConfig = {
  page: PageComposite,
  pages: PagesComposite,
  panel: PanelComposite,
  radiobutton: RadioButtonLeaf,
  text: TextLeaf,
};

const SurveyComposite = {
  DefaultConfig,
  PageComposite,
  PagesComposite,
  PanelComposite,
  RadioButtonLeaf,
  TextLeaf,
};

export default SurveyComposite;
