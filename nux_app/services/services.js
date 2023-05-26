import { LeaguesService } from "./users.service";


export default (axios) => ({
  leagues: new LeaguesService(axios),
});
