import { Specification } from "../model/Specification";

interface ICreateSpeficiationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpeficiationDTO): void
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpeficiationDTO };