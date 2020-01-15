import { IConfig } from "@/IConfig";

import Survey from "@core/survey/index";

import * as SurveyCommand from "@core/survey/domain/command/index";
import * as SurveyComposite from "@core/survey/domain/composite/index";

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
