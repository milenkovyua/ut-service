module.exports = ({service, name, schema}) => {
    return {
        path: `/${name}/{id}`,
        method: 'get',
        spec: {
            'x-bus-method': `${service}.${name}.get`,
            operationId: `get${name}`,
            tags: [name],
            description: `Get a ${name}.`,
            parameters: [{
                name: 'id',
                in: 'path',
                description: 'id',
                required: true,
                $ref: '#/definitions/uuid'
            }],
            responses: {
                default: {
                    description: 'Invalid request.',
                    schema: {
                        $ref: '#/definitions/error'
                    }
                },
                200: {
                    description: 'Records successfully obtained',
                    schema: {
                        type: 'object',
                        properties: {
                            id: {
                                $ref: '#/definitions/uuid'
                            },
                            data: schema
                        }
                    }
                }
            }
        }
    };
};
