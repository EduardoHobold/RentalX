import { Specification } from "../../model/Specification";
import { ICreateSpeficiationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
    
    create ({ name, description}: ICreateSpeficiationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        })

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
}

export { SpecificationsRepository };