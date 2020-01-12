import { IConfig } from "@/IConfig";

import Survey from "@/survey/index";

import SurveyCommand from "@/survey/command/index";
import SurveyComposite from "@/survey/composite/index";

const defaultConfig = {
  survey: {
    commandMap: SurveyCommand.DefaultConfig,
    compositeMap: SurveyComposite.DefaultConfig,
    context: Survey,
  },
};

export {
  SurveyComposite,
  SurveyCommand,
};

export default class Nyre {
  public survey: Survey;

  constructor(config: IConfig | undefined) {
    const globalConfig = {
      ...defaultConfig,
      ...config,
    };

    this.survey = new Survey(globalConfig.survey);
  }
}
