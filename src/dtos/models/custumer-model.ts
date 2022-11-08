import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Custumer {
    @Field()
    name: String;
}