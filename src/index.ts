import IConfig from "@/IConfig";
import Tree from "@/shared/composite/Tree";
import SurveyComposite from "@/survey/composite/index";

const defaultConfig = {
  survey: {
    compositeMap: SurveyComposite.DefaultConfig,
  },
};

export {
  SurveyComposite,
};

export default class Nyre {
  public SurveyBuilder: Tree = new Tree();

  constructor(config: IConfig | undefined) {
    const globalConfig = {
      ...defaultConfig,
      ...config,
    };

    this.SurveyBuilder.setConfig(globalConfig.survey);
  }
}
