// src/validators/IsUsernameOrEmail.ts

import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export default function IsUsernameOrEmail(
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUsernameOrEmail',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName1, relatedPropertyName2] = args.constraints;
          const relatedValue1 = (args.object as any)[relatedPropertyName1];
          const relatedValue2 = (args.object as any)[relatedPropertyName2];
          return relatedValue1 || relatedValue2;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Either username or email must be provided.';
        },
      },
      constraints: ['username', 'email'],
    });
  };
}
