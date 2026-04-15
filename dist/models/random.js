import { RandomWeight } from "../weights/random.js";
import { Model } from "./model.js";
export class RandomModel extends Model {
    constructor() {
        super([new RandomWeight(1)]);
    }
}
//# sourceMappingURL=random.js.map