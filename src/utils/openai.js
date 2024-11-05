import OpenAI from 'openai';
import { OPENAI_KEY} from './constants';
// initialization of openai, which gives helper function

const client = new OpenAI({ dangerouslyAllowBrowser: true,
  apiKey: OPENAI_KEY, // This is the default and can be omitted
});

export default client;