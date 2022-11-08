import { Query,Mutation,Resolver, Arg, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Custumer } from "../dtos/models/custumer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {

    @Query(() => [Appointment])
    async appointments(){
        return [
            {
                startsAt: new Date(),
                endsAt: new Date(),
            }
        ];
    }

    @Mutation(() => Appointment)
    async createAppointment(@Arg('data') data: CreateAppointmentInput) {
        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        }

        return appointment
    }

    @FieldResolver(() => Custumer)
    async custumer(@Root() appointment: Appointment){
        console.log(appointment)

        return {
            name: "wendel"
        }
    }
}