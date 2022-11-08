import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {

    @Field()
    custumerId: String;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}