module.exports = (service, spec) => {
    let { name, schema } = spec;
    let data = Object.assign({}, schema);
    delete data.required;
    return {
        'x-bus-method': `${service}.${name}.edit`,
        operationId: `edit${name}`,
        tags: [name],
        description: `Edit a ${name}.`,
        parameters: [{
            name: 'body',
            in: 'body',
            description: 'body',
            required: true,
            schema: {
                type: 'object',
                required: [
                    'id',
                    'data'
                ],
                properties: {
                    id: {
                        $ref: '#/definitions/uuid'
                    },
                    data: data
                }
            }
        }],
        responses: {
            default: {
                description: 'Invalid request.',
                schema: {
                    $ref: '#/definitions/error'
                }
            },
            200: {
                description: 'Successful request.',
                schema: schema
            }
        }
    };
};
