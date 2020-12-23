declare namespace User {
    type Base = {};
    type Id = {};

    declare namespace Query {
        type Result = Array<{
            id: string;
        }>;
    }

    declare namespace Mutation {
        declare namespace Like {
            type Variables = {};

            type Result = {};
        }

        declare namespace Update {
            type Variables = {};
            type Result = {};
        }

        declare namespace Delete {
            type Variables = {
                userId: string;
            };

            type Result = {};
        }
    }
}
