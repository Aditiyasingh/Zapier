
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model AvailableTrigger
 * 
 */
export type AvailableTrigger = $Result.DefaultSelection<Prisma.$AvailableTriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableAction
 * 
 */
export type AvailableAction = $Result.DefaultSelection<Prisma.$AvailableActionPayload>
/**
 * Model zapRun
 * 
 */
export type zapRun = $Result.DefaultSelection<Prisma.$zapRunPayload>
/**
 * Model zapRunoutbox
 * 
 */
export type zapRunoutbox = $Result.DefaultSelection<Prisma.$zapRunoutboxPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTrigger`: Exposes CRUD operations for the **AvailableTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTrigger.findMany()
    * ```
    */
  get availableTrigger(): Prisma.AvailableTriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableAction`: Exposes CRUD operations for the **AvailableAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableAction.findMany()
    * ```
    */
  get availableAction(): Prisma.AvailableActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRun`: Exposes CRUD operations for the **zapRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRuns
    * const zapRuns = await prisma.zapRun.findMany()
    * ```
    */
  get zapRun(): Prisma.zapRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zapRunoutbox`: Exposes CRUD operations for the **zapRunoutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZapRunoutboxes
    * const zapRunoutboxes = await prisma.zapRunoutbox.findMany()
    * ```
    */
  get zapRunoutbox(): Prisma.zapRunoutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Zap: 'Zap',
    Trigger: 'Trigger',
    AvailableTrigger: 'AvailableTrigger',
    Action: 'Action',
    AvailableAction: 'AvailableAction',
    zapRun: 'zapRun',
    zapRunoutbox: 'zapRunoutbox',
    Task: 'Task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "zap" | "trigger" | "availableTrigger" | "action" | "availableAction" | "zapRun" | "zapRunoutbox" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      AvailableTrigger: {
        payload: Prisma.$AvailableTriggerPayload<ExtArgs>
        fields: Prisma.AvailableTriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          update: {
            args: Prisma.AvailableTriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTrigger>
          }
          groupBy: {
            args: Prisma.AvailableTriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggerCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableAction: {
        payload: Prisma.$AvailableActionPayload<ExtArgs>
        fields: Prisma.AvailableActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findMany: {
            args: Prisma.AvailableActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          create: {
            args: Prisma.AvailableActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          createMany: {
            args: Prisma.AvailableActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          update: {
            args: Prisma.AvailableActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableAction>
          }
          groupBy: {
            args: Prisma.AvailableActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionCountAggregateOutputType> | number
          }
        }
      }
      zapRun: {
        payload: Prisma.$zapRunPayload<ExtArgs>
        fields: Prisma.zapRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zapRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zapRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          findFirst: {
            args: Prisma.zapRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zapRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          findMany: {
            args: Prisma.zapRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          create: {
            args: Prisma.zapRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          createMany: {
            args: Prisma.zapRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zapRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          delete: {
            args: Prisma.zapRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          update: {
            args: Prisma.zapRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          deleteMany: {
            args: Prisma.zapRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zapRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zapRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>[]
          }
          upsert: {
            args: Prisma.zapRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunPayload>
          }
          aggregate: {
            args: Prisma.ZapRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRun>
          }
          groupBy: {
            args: Prisma.zapRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.zapRunCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunCountAggregateOutputType> | number
          }
        }
      }
      zapRunoutbox: {
        payload: Prisma.$zapRunoutboxPayload<ExtArgs>
        fields: Prisma.zapRunoutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.zapRunoutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.zapRunoutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          findFirst: {
            args: Prisma.zapRunoutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.zapRunoutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          findMany: {
            args: Prisma.zapRunoutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>[]
          }
          create: {
            args: Prisma.zapRunoutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          createMany: {
            args: Prisma.zapRunoutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.zapRunoutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>[]
          }
          delete: {
            args: Prisma.zapRunoutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          update: {
            args: Prisma.zapRunoutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          deleteMany: {
            args: Prisma.zapRunoutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.zapRunoutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.zapRunoutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>[]
          }
          upsert: {
            args: Prisma.zapRunoutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$zapRunoutboxPayload>
          }
          aggregate: {
            args: Prisma.ZapRunoutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZapRunoutbox>
          }
          groupBy: {
            args: Prisma.zapRunoutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapRunoutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.zapRunoutboxCountArgs<ExtArgs>
            result: $Utils.Optional<ZapRunoutboxCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    zap?: ZapOmit
    trigger?: TriggerOmit
    availableTrigger?: AvailableTriggerOmit
    action?: ActionOmit
    availableAction?: AvailableActionOmit
    zapRun?: zapRunOmit
    zapRunoutbox?: zapRunoutboxOmit
    task?: TaskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    zaps: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaps?: boolean | UserCountOutputTypeCountZapsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountZapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
  }


  /**
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    actions: number
    Runs: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | ZapCountOutputTypeCountActionsArgs
    Runs?: boolean | ZapCountOutputTypeCountRunsArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunWhereInput
  }


  /**
   * Count Type AvailableTriggerCountOutputType
   */

  export type AvailableTriggerCountOutputType = {
    trigger: number
  }

  export type AvailableTriggerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AvailableTriggerCountOutputTypeCountTriggerArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerCountOutputType
     */
    select?: AvailableTriggerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeCountTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type ActionCountOutputType
   */

  export type ActionCountOutputType = {
    Task: number
  }

  export type ActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | ActionCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionCountOutputType
     */
    select?: ActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type AvailableActionCountOutputType
   */

  export type AvailableActionCountOutputType = {
    action: number
  }

  export type AvailableActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | AvailableActionCountOutputTypeCountActionArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionCountOutputType
     */
    select?: AvailableActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type ZapRunCountOutputType
   */

  export type ZapRunCountOutputType = {
    Task: number
  }

  export type ZapRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | ZapRunCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * ZapRunCountOutputType without action
   */
  export type ZapRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapRunCountOutputType
     */
    select?: ZapRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapRunCountOutputType without action
   */
  export type ZapRunCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    zaps?: boolean | User$zapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaps?: boolean | User$zapsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      zaps: Prisma.$ZapPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zaps<T extends User$zapsArgs<ExtArgs> = {}>(args?: Subset<T, User$zapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.zaps
   */
  export type User$zapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    cursor?: ZapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _avg: ZapAvgAggregateOutputType | null
    _sum: ZapSumAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapAvgAggregateOutputType = {
    userId: number | null
  }

  export type ZapSumAggregateOutputType = {
    userId: number | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
    userId: number | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
    userId: number | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type ZapAvgAggregateInputType = {
    userId?: true
  }

  export type ZapSumAggregateInputType = {
    userId?: true
  }

  export type ZapMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _avg?: ZapAvgAggregateInputType
    _sum?: ZapSumAggregateInputType
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    userId: number
    _count: ZapCountAggregateOutputType | null
    _avg: ZapAvgAggregateOutputType | null
    _sum: ZapSumAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    actions?: boolean | Zap$actionsArgs<ExtArgs>
    Runs?: boolean | Zap$RunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    actions?: boolean | Zap$actionsArgs<ExtArgs>
    Runs?: boolean | Zap$RunsArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ZapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      actions: Prisma.$ActionPayload<ExtArgs>[]
      Runs: Prisma.$zapRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {ZapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actions<T extends Zap$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Runs<T extends Zap$RunsArgs<ExtArgs> = {}>(args?: Subset<T, Zap$RunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
    readonly userId: FieldRef<"Zap", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap updateManyAndReturn
   */
  export type ZapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to delete.
     */
    limit?: number
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.actions
   */
  export type Zap$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Zap.Runs
   */
  export type Zap$RunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    where?: zapRunWhereInput
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    cursor?: zapRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
    zapId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
    zapId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    triggerId: number
    zapId: number
    metadata: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    triggerId?: true
    zapId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    triggerId?: true
    zapId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    triggerId?: true
    zapId?: true
    metadata?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    triggerId: string
    zapId: string
    metadata: JsonValue | null
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    zapId?: boolean
    metadata?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    zapId?: boolean
    metadata?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    zapId?: boolean
    metadata?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    triggerId?: boolean
    zapId?: boolean
    metadata?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId" | "zapId" | "metadata", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      type: Prisma.$AvailableTriggerPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
      zapId: string
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableTriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerDefaultArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly metadata: FieldRef<"Trigger", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTrigger
   */

  export type AggregateAvailableTrigger = {
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  export type AvailableTriggerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTrigger to aggregate.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type GetAvailableTriggerAggregateType<T extends AvailableTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTrigger[P]>
      : GetScalarType<T[P], AggregateAvailableTrigger[P]>
  }




  export type AvailableTriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggerWhereInput
    orderBy?: AvailableTriggerOrderByWithAggregationInput | AvailableTriggerOrderByWithAggregationInput[]
    by: AvailableTriggerScalarFieldEnum[] | AvailableTriggerScalarFieldEnum
    having?: AvailableTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggerCountAggregateInputType | true
    _min?: AvailableTriggerMinAggregateInputType
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type AvailableTriggerGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  type GetAvailableTriggerGroupByPayload<T extends AvailableTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trigger?: boolean | AvailableTrigger$triggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTrigger"]>
  export type AvailableTriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AvailableTrigger$triggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTrigger"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTrigger"]>
    composites: {}
  }

  type AvailableTriggerGetPayload<S extends boolean | null | undefined | AvailableTriggerDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggerPayload, S>

  type AvailableTriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggerCountAggregateInputType | true
    }

  export interface AvailableTriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTrigger'], meta: { name: 'AvailableTrigger' } }
    /**
     * Find zero or one AvailableTrigger that matches the filter.
     * @param {AvailableTriggerFindUniqueArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggerFindUniqueArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTrigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggerFindUniqueOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggerFindFirstArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggerFindManyArgs>(args?: SelectSubset<T, AvailableTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTrigger.
     * @param {AvailableTriggerCreateArgs} args - Arguments to create a AvailableTrigger.
     * @example
     * // Create one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.create({
     *   data: {
     *     // ... data to create a AvailableTrigger
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggerCreateArgs>(args: SelectSubset<T, AvailableTriggerCreateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggerCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggerCreateManyArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggerCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTrigger.
     * @param {AvailableTriggerDeleteArgs} args - Arguments to delete one AvailableTrigger.
     * @example
     * // Delete one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.delete({
     *   where: {
     *     // ... filter to delete one AvailableTrigger
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggerDeleteArgs>(args: SelectSubset<T, AvailableTriggerDeleteArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTrigger.
     * @param {AvailableTriggerUpdateArgs} args - Arguments to update one AvailableTrigger.
     * @example
     * // Update one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggerUpdateArgs>(args: SelectSubset<T, AvailableTriggerUpdateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggerDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggerDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggerUpdateManyArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggerUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableTriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTrigger.
     * @param {AvailableTriggerUpsertArgs} args - Arguments to update or create a AvailableTrigger.
     * @example
     * // Update or create a AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.upsert({
     *   create: {
     *     // ... data to create a AvailableTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTrigger we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggerUpsertArgs>(args: SelectSubset<T, AvailableTriggerUpsertArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTrigger.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggerCountArgs>(
      args?: Subset<T, AvailableTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableTriggerAggregateArgs>(args: Subset<T, AvailableTriggerAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggerAggregateType<T>>

    /**
     * Group by AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggerGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTrigger model
   */
  readonly fields: AvailableTriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends AvailableTrigger$triggerArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTrigger$triggerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableTrigger model
   */
  interface AvailableTriggerFieldRefs {
    readonly id: FieldRef<"AvailableTrigger", 'String'>
    readonly name: FieldRef<"AvailableTrigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTrigger findUnique
   */
  export type AvailableTriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findUniqueOrThrow
   */
  export type AvailableTriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findFirst
   */
  export type AvailableTriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findFirstOrThrow
   */
  export type AvailableTriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findMany
   */
  export type AvailableTriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger create
   */
  export type AvailableTriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTrigger.
     */
    data: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
  }

  /**
   * AvailableTrigger createMany
   */
  export type AvailableTriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger createManyAndReturn
   */
  export type AvailableTriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger update
   */
  export type AvailableTriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTrigger.
     */
    data: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
    /**
     * Choose, which AvailableTrigger to update.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger updateMany
   */
  export type AvailableTriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger updateManyAndReturn
   */
  export type AvailableTriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger upsert
   */
  export type AvailableTriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTrigger to update in case it exists.
     */
    where: AvailableTriggerWhereUniqueInput
    /**
     * In case the AvailableTrigger found by the `where` argument doesn't exist, create a new AvailableTrigger with this data.
     */
    create: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
    /**
     * In case the AvailableTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
  }

  /**
   * AvailableTrigger delete
   */
  export type AvailableTriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter which AvailableTrigger to delete.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger deleteMany
   */
  export type AvailableTriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTrigger.trigger
   */
  export type AvailableTrigger$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger without action
   */
  export type AvailableTriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionSumAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    ZapId: string | null
    ActionName: string | null
    sortingOrder: number | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    ZapId: string | null
    ActionName: string | null
    sortingOrder: number | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    ZapId: number
    ActionName: number
    sortingOrder: number
    metadata: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionSumAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    ZapId?: true
    ActionName?: true
    sortingOrder?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    ZapId?: true
    ActionName?: true
    sortingOrder?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    ZapId?: true
    ActionName?: true
    sortingOrder?: true
    metadata?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    ZapId: string
    ActionName: string
    sortingOrder: number
    metadata: JsonValue | null
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ZapId?: boolean
    ActionName?: boolean
    sortingOrder?: boolean
    metadata?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    Task?: boolean | Action$TaskArgs<ExtArgs>
    _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ZapId?: boolean
    ActionName?: boolean
    sortingOrder?: boolean
    metadata?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ZapId?: boolean
    ActionName?: boolean
    sortingOrder?: boolean
    metadata?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    ZapId?: boolean
    ActionName?: boolean
    sortingOrder?: boolean
    metadata?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ZapId" | "ActionName" | "sortingOrder" | "metadata", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    Task?: boolean | Action$TaskArgs<ExtArgs>
    _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      type: Prisma.$AvailableActionPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
      Task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ZapId: string
      ActionName: string
      sortingOrder: number
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionDefaultArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Task<T extends Action$TaskArgs<ExtArgs> = {}>(args?: Subset<T, Action$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly ZapId: FieldRef<"Action", 'String'>
    readonly ActionName: FieldRef<"Action", 'String'>
    readonly sortingOrder: FieldRef<"Action", 'Int'>
    readonly metadata: FieldRef<"Action", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action.Task
   */
  export type Action$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableAction
   */

  export type AggregateAvailableAction = {
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  export type AvailableActionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAction to aggregate.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionMaxAggregateInputType
  }

  export type GetAvailableActionAggregateType<T extends AvailableActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableAction[P]>
      : GetScalarType<T[P], AggregateAvailableAction[P]>
  }




  export type AvailableActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionWhereInput
    orderBy?: AvailableActionOrderByWithAggregationInput | AvailableActionOrderByWithAggregationInput[]
    by: AvailableActionScalarFieldEnum[] | AvailableActionScalarFieldEnum
    having?: AvailableActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionCountAggregateInputType | true
    _min?: AvailableActionMinAggregateInputType
    _max?: AvailableActionMaxAggregateInputType
  }

  export type AvailableActionGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  type GetAvailableActionGroupByPayload<T extends AvailableActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean | AvailableAction$actionArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableAction"]>
  export type AvailableActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | AvailableAction$actionArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableAction"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableAction"]>
    composites: {}
  }

  type AvailableActionGetPayload<S extends boolean | null | undefined | AvailableActionDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionPayload, S>

  type AvailableActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionCountAggregateInputType | true
    }

  export interface AvailableActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableAction'], meta: { name: 'AvailableAction' } }
    /**
     * Find zero or one AvailableAction that matches the filter.
     * @param {AvailableActionFindUniqueArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionFindUniqueArgs>(args: SelectSubset<T, AvailableActionFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionFindUniqueOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionFindFirstArgs>(args?: SelectSubset<T, AvailableActionFindFirstArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableAction.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionFindManyArgs>(args?: SelectSubset<T, AvailableActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableAction.
     * @param {AvailableActionCreateArgs} args - Arguments to create a AvailableAction.
     * @example
     * // Create one AvailableAction
     * const AvailableAction = await prisma.availableAction.create({
     *   data: {
     *     // ... data to create a AvailableAction
     *   }
     * })
     * 
     */
    create<T extends AvailableActionCreateArgs>(args: SelectSubset<T, AvailableActionCreateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionCreateManyArgs>(args?: SelectSubset<T, AvailableActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableAction.
     * @param {AvailableActionDeleteArgs} args - Arguments to delete one AvailableAction.
     * @example
     * // Delete one AvailableAction
     * const AvailableAction = await prisma.availableAction.delete({
     *   where: {
     *     // ... filter to delete one AvailableAction
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionDeleteArgs>(args: SelectSubset<T, AvailableActionDeleteArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableAction.
     * @param {AvailableActionUpdateArgs} args - Arguments to update one AvailableAction.
     * @example
     * // Update one AvailableAction
     * const availableAction = await prisma.availableAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionUpdateArgs>(args: SelectSubset<T, AvailableActionUpdateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionDeleteManyArgs>(args?: SelectSubset<T, AvailableActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionUpdateManyArgs>(args: SelectSubset<T, AvailableActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableActionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableAction.
     * @param {AvailableActionUpsertArgs} args - Arguments to update or create a AvailableAction.
     * @example
     * // Update or create a AvailableAction
     * const availableAction = await prisma.availableAction.upsert({
     *   create: {
     *     // ... data to create a AvailableAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableAction we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionUpsertArgs>(args: SelectSubset<T, AvailableActionUpsertArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableAction.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionCountArgs>(
      args?: Subset<T, AvailableActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableActionAggregateArgs>(args: Subset<T, AvailableActionAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionAggregateType<T>>

    /**
     * Group by AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableAction model
   */
  readonly fields: AvailableActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends AvailableAction$actionArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAction$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableAction model
   */
  interface AvailableActionFieldRefs {
    readonly id: FieldRef<"AvailableAction", 'String'>
    readonly name: FieldRef<"AvailableAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableAction findUnique
   */
  export type AvailableActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findUniqueOrThrow
   */
  export type AvailableActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findFirst
   */
  export type AvailableActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findFirstOrThrow
   */
  export type AvailableActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findMany
   */
  export type AvailableActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction create
   */
  export type AvailableActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableAction.
     */
    data: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
  }

  /**
   * AvailableAction createMany
   */
  export type AvailableActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction createManyAndReturn
   */
  export type AvailableActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction update
   */
  export type AvailableActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableAction.
     */
    data: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
    /**
     * Choose, which AvailableAction to update.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction updateMany
   */
  export type AvailableActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction updateManyAndReturn
   */
  export type AvailableActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction upsert
   */
  export type AvailableActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableAction to update in case it exists.
     */
    where: AvailableActionWhereUniqueInput
    /**
     * In case the AvailableAction found by the `where` argument doesn't exist, create a new AvailableAction with this data.
     */
    create: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
    /**
     * In case the AvailableAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
  }

  /**
   * AvailableAction delete
   */
  export type AvailableActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter which AvailableAction to delete.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction deleteMany
   */
  export type AvailableActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableAction.action
   */
  export type AvailableAction$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableAction without action
   */
  export type AvailableActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
  }


  /**
   * Model zapRun
   */

  export type AggregateZapRun = {
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  export type ZapRunMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    status: string | null
  }

  export type ZapRunMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    status: string | null
  }

  export type ZapRunCountAggregateOutputType = {
    id: number
    zapId: number
    status: number
    metadata: number
    _all: number
  }


  export type ZapRunMinAggregateInputType = {
    id?: true
    zapId?: true
    status?: true
  }

  export type ZapRunMaxAggregateInputType = {
    id?: true
    zapId?: true
    status?: true
  }

  export type ZapRunCountAggregateInputType = {
    id?: true
    zapId?: true
    status?: true
    metadata?: true
    _all?: true
  }

  export type ZapRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRun to aggregate.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zapRuns
    **/
    _count?: true | ZapRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunMaxAggregateInputType
  }

  export type GetZapRunAggregateType<T extends ZapRunAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRun[P]>
      : GetScalarType<T[P], AggregateZapRun[P]>
  }




  export type zapRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunWhereInput
    orderBy?: zapRunOrderByWithAggregationInput | zapRunOrderByWithAggregationInput[]
    by: ZapRunScalarFieldEnum[] | ZapRunScalarFieldEnum
    having?: zapRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunCountAggregateInputType | true
    _min?: ZapRunMinAggregateInputType
    _max?: ZapRunMaxAggregateInputType
  }

  export type ZapRunGroupByOutputType = {
    id: string
    zapId: string
    status: string | null
    metadata: JsonValue | null
    _count: ZapRunCountAggregateOutputType | null
    _min: ZapRunMinAggregateOutputType | null
    _max: ZapRunMaxAggregateOutputType | null
  }

  type GetZapRunGroupByPayload<T extends zapRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunGroupByOutputType[P]>
        }
      >
    >


  export type zapRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    status?: boolean
    metadata?: boolean
    Task?: boolean | zapRun$TaskArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zaprunoutbox?: boolean | zapRun$zaprunoutboxArgs<ExtArgs>
    _count?: boolean | ZapRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    status?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    status?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRun"]>

  export type zapRunSelectScalar = {
    id?: boolean
    zapId?: boolean
    status?: boolean
    metadata?: boolean
  }

  export type zapRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "status" | "metadata", ExtArgs["result"]["zapRun"]>
  export type zapRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | zapRun$TaskArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zaprunoutbox?: boolean | zapRun$zaprunoutboxArgs<ExtArgs>
    _count?: boolean | ZapRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type zapRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type zapRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $zapRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zapRun"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>[]
      zap: Prisma.$ZapPayload<ExtArgs>
      zaprunoutbox: Prisma.$zapRunoutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      status: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["zapRun"]>
    composites: {}
  }

  type zapRunGetPayload<S extends boolean | null | undefined | zapRunDefaultArgs> = $Result.GetResult<Prisma.$zapRunPayload, S>

  type zapRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zapRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunCountAggregateInputType | true
    }

  export interface zapRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zapRun'], meta: { name: 'zapRun' } }
    /**
     * Find zero or one ZapRun that matches the filter.
     * @param {zapRunFindUniqueArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunFindUniqueArgs>(args: SelectSubset<T, zapRunFindUniqueArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunFindUniqueOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunFindUniqueOrThrowArgs>(args: SelectSubset<T, zapRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunFindFirstArgs>(args?: SelectSubset<T, zapRunFindFirstArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindFirstOrThrowArgs} args - Arguments to find a ZapRun
     * @example
     * // Get one ZapRun
     * const zapRun = await prisma.zapRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunFindFirstOrThrowArgs>(args?: SelectSubset<T, zapRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRuns
     * const zapRuns = await prisma.zapRun.findMany()
     * 
     * // Get first 10 ZapRuns
     * const zapRuns = await prisma.zapRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zapRunFindManyArgs>(args?: SelectSubset<T, zapRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRun.
     * @param {zapRunCreateArgs} args - Arguments to create a ZapRun.
     * @example
     * // Create one ZapRun
     * const ZapRun = await prisma.zapRun.create({
     *   data: {
     *     // ... data to create a ZapRun
     *   }
     * })
     * 
     */
    create<T extends zapRunCreateArgs>(args: SelectSubset<T, zapRunCreateArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRuns.
     * @param {zapRunCreateManyArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zapRunCreateManyArgs>(args?: SelectSubset<T, zapRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRuns and returns the data saved in the database.
     * @param {zapRunCreateManyAndReturnArgs} args - Arguments to create many ZapRuns.
     * @example
     * // Create many ZapRuns
     * const zapRun = await prisma.zapRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zapRunCreateManyAndReturnArgs>(args?: SelectSubset<T, zapRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRun.
     * @param {zapRunDeleteArgs} args - Arguments to delete one ZapRun.
     * @example
     * // Delete one ZapRun
     * const ZapRun = await prisma.zapRun.delete({
     *   where: {
     *     // ... filter to delete one ZapRun
     *   }
     * })
     * 
     */
    delete<T extends zapRunDeleteArgs>(args: SelectSubset<T, zapRunDeleteArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRun.
     * @param {zapRunUpdateArgs} args - Arguments to update one ZapRun.
     * @example
     * // Update one ZapRun
     * const zapRun = await prisma.zapRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zapRunUpdateArgs>(args: SelectSubset<T, zapRunUpdateArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRuns.
     * @param {zapRunDeleteManyArgs} args - Arguments to filter ZapRuns to delete.
     * @example
     * // Delete a few ZapRuns
     * const { count } = await prisma.zapRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zapRunDeleteManyArgs>(args?: SelectSubset<T, zapRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zapRunUpdateManyArgs>(args: SelectSubset<T, zapRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRuns and returns the data updated in the database.
     * @param {zapRunUpdateManyAndReturnArgs} args - Arguments to update many ZapRuns.
     * @example
     * // Update many ZapRuns
     * const zapRun = await prisma.zapRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRuns and only return the `id`
     * const zapRunWithIdOnly = await prisma.zapRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends zapRunUpdateManyAndReturnArgs>(args: SelectSubset<T, zapRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRun.
     * @param {zapRunUpsertArgs} args - Arguments to update or create a ZapRun.
     * @example
     * // Update or create a ZapRun
     * const zapRun = await prisma.zapRun.upsert({
     *   create: {
     *     // ... data to create a ZapRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRun we want to update
     *   }
     * })
     */
    upsert<T extends zapRunUpsertArgs>(args: SelectSubset<T, zapRunUpsertArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunCountArgs} args - Arguments to filter ZapRuns to count.
     * @example
     * // Count the number of ZapRuns
     * const count = await prisma.zapRun.count({
     *   where: {
     *     // ... the filter for the ZapRuns we want to count
     *   }
     * })
    **/
    count<T extends zapRunCountArgs>(
      args?: Subset<T, zapRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunAggregateArgs>(args: Subset<T, ZapRunAggregateArgs>): Prisma.PrismaPromise<GetZapRunAggregateType<T>>

    /**
     * Group by ZapRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zapRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zapRunGroupByArgs['orderBy'] }
        : { orderBy?: zapRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zapRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zapRun model
   */
  readonly fields: zapRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zapRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zapRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends zapRun$TaskArgs<ExtArgs> = {}>(args?: Subset<T, zapRun$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zaprunoutbox<T extends zapRun$zaprunoutboxArgs<ExtArgs> = {}>(args?: Subset<T, zapRun$zaprunoutboxArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zapRun model
   */
  interface zapRunFieldRefs {
    readonly id: FieldRef<"zapRun", 'String'>
    readonly zapId: FieldRef<"zapRun", 'String'>
    readonly status: FieldRef<"zapRun", 'String'>
    readonly metadata: FieldRef<"zapRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * zapRun findUnique
   */
  export type zapRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun findUniqueOrThrow
   */
  export type zapRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun findFirst
   */
  export type zapRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun findFirstOrThrow
   */
  export type zapRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRun to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun findMany
   */
  export type zapRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter, which zapRuns to fetch.
     */
    where?: zapRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRuns to fetch.
     */
    orderBy?: zapRunOrderByWithRelationInput | zapRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zapRuns.
     */
    cursor?: zapRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRuns.
     */
    distinct?: ZapRunScalarFieldEnum | ZapRunScalarFieldEnum[]
  }

  /**
   * zapRun create
   */
  export type zapRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The data needed to create a zapRun.
     */
    data: XOR<zapRunCreateInput, zapRunUncheckedCreateInput>
  }

  /**
   * zapRun createMany
   */
  export type zapRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRuns.
     */
    data: zapRunCreateManyInput | zapRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zapRun createManyAndReturn
   */
  export type zapRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * The data used to create many zapRuns.
     */
    data: zapRunCreateManyInput | zapRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRun update
   */
  export type zapRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The data needed to update a zapRun.
     */
    data: XOR<zapRunUpdateInput, zapRunUncheckedUpdateInput>
    /**
     * Choose, which zapRun to update.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun updateMany
   */
  export type zapRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRuns.
     */
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyInput>
    /**
     * Filter which zapRuns to update
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number
  }

  /**
   * zapRun updateManyAndReturn
   */
  export type zapRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * The data used to update zapRuns.
     */
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyInput>
    /**
     * Filter which zapRuns to update
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRun upsert
   */
  export type zapRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * The filter to search for the zapRun to update in case it exists.
     */
    where: zapRunWhereUniqueInput
    /**
     * In case the zapRun found by the `where` argument doesn't exist, create a new zapRun with this data.
     */
    create: XOR<zapRunCreateInput, zapRunUncheckedCreateInput>
    /**
     * In case the zapRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zapRunUpdateInput, zapRunUncheckedUpdateInput>
  }

  /**
   * zapRun delete
   */
  export type zapRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
    /**
     * Filter which zapRun to delete.
     */
    where: zapRunWhereUniqueInput
  }

  /**
   * zapRun deleteMany
   */
  export type zapRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRuns to delete
     */
    where?: zapRunWhereInput
    /**
     * Limit how many zapRuns to delete.
     */
    limit?: number
  }

  /**
   * zapRun.Task
   */
  export type zapRun$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * zapRun.zaprunoutbox
   */
  export type zapRun$zaprunoutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    where?: zapRunoutboxWhereInput
  }

  /**
   * zapRun without action
   */
  export type zapRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRun
     */
    select?: zapRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRun
     */
    omit?: zapRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunInclude<ExtArgs> | null
  }


  /**
   * Model zapRunoutbox
   */

  export type AggregateZapRunoutbox = {
    _count: ZapRunoutboxCountAggregateOutputType | null
    _min: ZapRunoutboxMinAggregateOutputType | null
    _max: ZapRunoutboxMaxAggregateOutputType | null
  }

  export type ZapRunoutboxMinAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunoutboxMaxAggregateOutputType = {
    id: string | null
    zapRunId: string | null
  }

  export type ZapRunoutboxCountAggregateOutputType = {
    id: number
    zapRunId: number
    metadata: number
    _all: number
  }


  export type ZapRunoutboxMinAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunoutboxMaxAggregateInputType = {
    id?: true
    zapRunId?: true
  }

  export type ZapRunoutboxCountAggregateInputType = {
    id?: true
    zapRunId?: true
    metadata?: true
    _all?: true
  }

  export type ZapRunoutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunoutbox to aggregate.
     */
    where?: zapRunoutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunoutboxes to fetch.
     */
    orderBy?: zapRunoutboxOrderByWithRelationInput | zapRunoutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: zapRunoutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunoutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunoutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned zapRunoutboxes
    **/
    _count?: true | ZapRunoutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapRunoutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapRunoutboxMaxAggregateInputType
  }

  export type GetZapRunoutboxAggregateType<T extends ZapRunoutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateZapRunoutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZapRunoutbox[P]>
      : GetScalarType<T[P], AggregateZapRunoutbox[P]>
  }




  export type zapRunoutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: zapRunoutboxWhereInput
    orderBy?: zapRunoutboxOrderByWithAggregationInput | zapRunoutboxOrderByWithAggregationInput[]
    by: ZapRunoutboxScalarFieldEnum[] | ZapRunoutboxScalarFieldEnum
    having?: zapRunoutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapRunoutboxCountAggregateInputType | true
    _min?: ZapRunoutboxMinAggregateInputType
    _max?: ZapRunoutboxMaxAggregateInputType
  }

  export type ZapRunoutboxGroupByOutputType = {
    id: string
    zapRunId: string
    metadata: JsonValue | null
    _count: ZapRunoutboxCountAggregateOutputType | null
    _min: ZapRunoutboxMinAggregateOutputType | null
    _max: ZapRunoutboxMaxAggregateOutputType | null
  }

  type GetZapRunoutboxGroupByPayload<T extends zapRunoutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapRunoutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapRunoutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapRunoutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZapRunoutboxGroupByOutputType[P]>
        }
      >
    >


  export type zapRunoutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    metadata?: boolean
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunoutbox"]>

  export type zapRunoutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    metadata?: boolean
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunoutbox"]>

  export type zapRunoutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapRunId?: boolean
    metadata?: boolean
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zapRunoutbox"]>

  export type zapRunoutboxSelectScalar = {
    id?: boolean
    zapRunId?: boolean
    metadata?: boolean
  }

  export type zapRunoutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapRunId" | "metadata", ExtArgs["result"]["zapRunoutbox"]>
  export type zapRunoutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }
  export type zapRunoutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }
  export type zapRunoutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | zapRunDefaultArgs<ExtArgs>
  }

  export type $zapRunoutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "zapRunoutbox"
    objects: {
      zaprun: Prisma.$zapRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapRunId: string
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["zapRunoutbox"]>
    composites: {}
  }

  type zapRunoutboxGetPayload<S extends boolean | null | undefined | zapRunoutboxDefaultArgs> = $Result.GetResult<Prisma.$zapRunoutboxPayload, S>

  type zapRunoutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<zapRunoutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapRunoutboxCountAggregateInputType | true
    }

  export interface zapRunoutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['zapRunoutbox'], meta: { name: 'zapRunoutbox' } }
    /**
     * Find zero or one ZapRunoutbox that matches the filter.
     * @param {zapRunoutboxFindUniqueArgs} args - Arguments to find a ZapRunoutbox
     * @example
     * // Get one ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends zapRunoutboxFindUniqueArgs>(args: SelectSubset<T, zapRunoutboxFindUniqueArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZapRunoutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {zapRunoutboxFindUniqueOrThrowArgs} args - Arguments to find a ZapRunoutbox
     * @example
     * // Get one ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends zapRunoutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, zapRunoutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunoutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxFindFirstArgs} args - Arguments to find a ZapRunoutbox
     * @example
     * // Get one ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends zapRunoutboxFindFirstArgs>(args?: SelectSubset<T, zapRunoutboxFindFirstArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZapRunoutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxFindFirstOrThrowArgs} args - Arguments to find a ZapRunoutbox
     * @example
     * // Get one ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends zapRunoutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, zapRunoutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZapRunoutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZapRunoutboxes
     * const zapRunoutboxes = await prisma.zapRunoutbox.findMany()
     * 
     * // Get first 10 ZapRunoutboxes
     * const zapRunoutboxes = await prisma.zapRunoutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapRunoutboxWithIdOnly = await prisma.zapRunoutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends zapRunoutboxFindManyArgs>(args?: SelectSubset<T, zapRunoutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZapRunoutbox.
     * @param {zapRunoutboxCreateArgs} args - Arguments to create a ZapRunoutbox.
     * @example
     * // Create one ZapRunoutbox
     * const ZapRunoutbox = await prisma.zapRunoutbox.create({
     *   data: {
     *     // ... data to create a ZapRunoutbox
     *   }
     * })
     * 
     */
    create<T extends zapRunoutboxCreateArgs>(args: SelectSubset<T, zapRunoutboxCreateArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZapRunoutboxes.
     * @param {zapRunoutboxCreateManyArgs} args - Arguments to create many ZapRunoutboxes.
     * @example
     * // Create many ZapRunoutboxes
     * const zapRunoutbox = await prisma.zapRunoutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends zapRunoutboxCreateManyArgs>(args?: SelectSubset<T, zapRunoutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZapRunoutboxes and returns the data saved in the database.
     * @param {zapRunoutboxCreateManyAndReturnArgs} args - Arguments to create many ZapRunoutboxes.
     * @example
     * // Create many ZapRunoutboxes
     * const zapRunoutbox = await prisma.zapRunoutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZapRunoutboxes and only return the `id`
     * const zapRunoutboxWithIdOnly = await prisma.zapRunoutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends zapRunoutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, zapRunoutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZapRunoutbox.
     * @param {zapRunoutboxDeleteArgs} args - Arguments to delete one ZapRunoutbox.
     * @example
     * // Delete one ZapRunoutbox
     * const ZapRunoutbox = await prisma.zapRunoutbox.delete({
     *   where: {
     *     // ... filter to delete one ZapRunoutbox
     *   }
     * })
     * 
     */
    delete<T extends zapRunoutboxDeleteArgs>(args: SelectSubset<T, zapRunoutboxDeleteArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZapRunoutbox.
     * @param {zapRunoutboxUpdateArgs} args - Arguments to update one ZapRunoutbox.
     * @example
     * // Update one ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends zapRunoutboxUpdateArgs>(args: SelectSubset<T, zapRunoutboxUpdateArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZapRunoutboxes.
     * @param {zapRunoutboxDeleteManyArgs} args - Arguments to filter ZapRunoutboxes to delete.
     * @example
     * // Delete a few ZapRunoutboxes
     * const { count } = await prisma.zapRunoutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends zapRunoutboxDeleteManyArgs>(args?: SelectSubset<T, zapRunoutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunoutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZapRunoutboxes
     * const zapRunoutbox = await prisma.zapRunoutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends zapRunoutboxUpdateManyArgs>(args: SelectSubset<T, zapRunoutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZapRunoutboxes and returns the data updated in the database.
     * @param {zapRunoutboxUpdateManyAndReturnArgs} args - Arguments to update many ZapRunoutboxes.
     * @example
     * // Update many ZapRunoutboxes
     * const zapRunoutbox = await prisma.zapRunoutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZapRunoutboxes and only return the `id`
     * const zapRunoutboxWithIdOnly = await prisma.zapRunoutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends zapRunoutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, zapRunoutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZapRunoutbox.
     * @param {zapRunoutboxUpsertArgs} args - Arguments to update or create a ZapRunoutbox.
     * @example
     * // Update or create a ZapRunoutbox
     * const zapRunoutbox = await prisma.zapRunoutbox.upsert({
     *   create: {
     *     // ... data to create a ZapRunoutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZapRunoutbox we want to update
     *   }
     * })
     */
    upsert<T extends zapRunoutboxUpsertArgs>(args: SelectSubset<T, zapRunoutboxUpsertArgs<ExtArgs>>): Prisma__zapRunoutboxClient<$Result.GetResult<Prisma.$zapRunoutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZapRunoutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxCountArgs} args - Arguments to filter ZapRunoutboxes to count.
     * @example
     * // Count the number of ZapRunoutboxes
     * const count = await prisma.zapRunoutbox.count({
     *   where: {
     *     // ... the filter for the ZapRunoutboxes we want to count
     *   }
     * })
    **/
    count<T extends zapRunoutboxCountArgs>(
      args?: Subset<T, zapRunoutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapRunoutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZapRunoutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapRunoutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ZapRunoutboxAggregateArgs>(args: Subset<T, ZapRunoutboxAggregateArgs>): Prisma.PrismaPromise<GetZapRunoutboxAggregateType<T>>

    /**
     * Group by ZapRunoutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {zapRunoutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends zapRunoutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: zapRunoutboxGroupByArgs['orderBy'] }
        : { orderBy?: zapRunoutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, zapRunoutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapRunoutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the zapRunoutbox model
   */
  readonly fields: zapRunoutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for zapRunoutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__zapRunoutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zaprun<T extends zapRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, zapRunDefaultArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the zapRunoutbox model
   */
  interface zapRunoutboxFieldRefs {
    readonly id: FieldRef<"zapRunoutbox", 'String'>
    readonly zapRunId: FieldRef<"zapRunoutbox", 'String'>
    readonly metadata: FieldRef<"zapRunoutbox", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * zapRunoutbox findUnique
   */
  export type zapRunoutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunoutbox to fetch.
     */
    where: zapRunoutboxWhereUniqueInput
  }

  /**
   * zapRunoutbox findUniqueOrThrow
   */
  export type zapRunoutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunoutbox to fetch.
     */
    where: zapRunoutboxWhereUniqueInput
  }

  /**
   * zapRunoutbox findFirst
   */
  export type zapRunoutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunoutbox to fetch.
     */
    where?: zapRunoutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunoutboxes to fetch.
     */
    orderBy?: zapRunoutboxOrderByWithRelationInput | zapRunoutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRunoutboxes.
     */
    cursor?: zapRunoutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunoutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunoutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRunoutboxes.
     */
    distinct?: ZapRunoutboxScalarFieldEnum | ZapRunoutboxScalarFieldEnum[]
  }

  /**
   * zapRunoutbox findFirstOrThrow
   */
  export type zapRunoutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunoutbox to fetch.
     */
    where?: zapRunoutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunoutboxes to fetch.
     */
    orderBy?: zapRunoutboxOrderByWithRelationInput | zapRunoutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for zapRunoutboxes.
     */
    cursor?: zapRunoutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunoutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunoutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRunoutboxes.
     */
    distinct?: ZapRunoutboxScalarFieldEnum | ZapRunoutboxScalarFieldEnum[]
  }

  /**
   * zapRunoutbox findMany
   */
  export type zapRunoutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter, which zapRunoutboxes to fetch.
     */
    where?: zapRunoutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of zapRunoutboxes to fetch.
     */
    orderBy?: zapRunoutboxOrderByWithRelationInput | zapRunoutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing zapRunoutboxes.
     */
    cursor?: zapRunoutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` zapRunoutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` zapRunoutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of zapRunoutboxes.
     */
    distinct?: ZapRunoutboxScalarFieldEnum | ZapRunoutboxScalarFieldEnum[]
  }

  /**
   * zapRunoutbox create
   */
  export type zapRunoutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a zapRunoutbox.
     */
    data: XOR<zapRunoutboxCreateInput, zapRunoutboxUncheckedCreateInput>
  }

  /**
   * zapRunoutbox createMany
   */
  export type zapRunoutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many zapRunoutboxes.
     */
    data: zapRunoutboxCreateManyInput | zapRunoutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * zapRunoutbox createManyAndReturn
   */
  export type zapRunoutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * The data used to create many zapRunoutboxes.
     */
    data: zapRunoutboxCreateManyInput | zapRunoutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRunoutbox update
   */
  export type zapRunoutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a zapRunoutbox.
     */
    data: XOR<zapRunoutboxUpdateInput, zapRunoutboxUncheckedUpdateInput>
    /**
     * Choose, which zapRunoutbox to update.
     */
    where: zapRunoutboxWhereUniqueInput
  }

  /**
   * zapRunoutbox updateMany
   */
  export type zapRunoutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update zapRunoutboxes.
     */
    data: XOR<zapRunoutboxUpdateManyMutationInput, zapRunoutboxUncheckedUpdateManyInput>
    /**
     * Filter which zapRunoutboxes to update
     */
    where?: zapRunoutboxWhereInput
    /**
     * Limit how many zapRunoutboxes to update.
     */
    limit?: number
  }

  /**
   * zapRunoutbox updateManyAndReturn
   */
  export type zapRunoutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * The data used to update zapRunoutboxes.
     */
    data: XOR<zapRunoutboxUpdateManyMutationInput, zapRunoutboxUncheckedUpdateManyInput>
    /**
     * Filter which zapRunoutboxes to update
     */
    where?: zapRunoutboxWhereInput
    /**
     * Limit how many zapRunoutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * zapRunoutbox upsert
   */
  export type zapRunoutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the zapRunoutbox to update in case it exists.
     */
    where: zapRunoutboxWhereUniqueInput
    /**
     * In case the zapRunoutbox found by the `where` argument doesn't exist, create a new zapRunoutbox with this data.
     */
    create: XOR<zapRunoutboxCreateInput, zapRunoutboxUncheckedCreateInput>
    /**
     * In case the zapRunoutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<zapRunoutboxUpdateInput, zapRunoutboxUncheckedUpdateInput>
  }

  /**
   * zapRunoutbox delete
   */
  export type zapRunoutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
    /**
     * Filter which zapRunoutbox to delete.
     */
    where: zapRunoutboxWhereUniqueInput
  }

  /**
   * zapRunoutbox deleteMany
   */
  export type zapRunoutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which zapRunoutboxes to delete
     */
    where?: zapRunoutboxWhereInput
    /**
     * Limit how many zapRunoutboxes to delete.
     */
    limit?: number
  }

  /**
   * zapRunoutbox without action
   */
  export type zapRunoutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the zapRunoutbox
     */
    select?: zapRunoutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the zapRunoutbox
     */
    omit?: zapRunoutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: zapRunoutboxInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    runId: string | null
    actionId: string | null
    status: string | null
    error: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    runId: string | null
    actionId: string | null
    status: string | null
    error: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    runId: number
    actionId: number
    status: number
    error: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    runId?: true
    actionId?: true
    status?: true
    error?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    runId?: true
    actionId?: true
    status?: true
    error?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    runId?: true
    actionId?: true
    status?: true
    error?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    runId: string
    actionId: string
    status: string
    error: string | null
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    actionId?: boolean
    status?: boolean
    error?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    actionId?: boolean
    status?: boolean
    error?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    runId?: boolean
    actionId?: boolean
    status?: boolean
    error?: boolean
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    runId?: boolean
    actionId?: boolean
    status?: boolean
    error?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "runId" | "actionId" | "status" | "error", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zapRun?: boolean | zapRunDefaultArgs<ExtArgs>
    action?: boolean | ActionDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      zapRun: Prisma.$zapRunPayload<ExtArgs>
      action: Prisma.$ActionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      runId: string
      actionId: string
      status: string
      error: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zapRun<T extends zapRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, zapRunDefaultArgs<ExtArgs>>): Prisma__zapRunClient<$Result.GetResult<Prisma.$zapRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly runId: FieldRef<"Task", 'String'>
    readonly actionId: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly error: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId',
    zapId: 'zapId',
    metadata: 'metadata'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const AvailableTriggerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggerScalarFieldEnum = (typeof AvailableTriggerScalarFieldEnum)[keyof typeof AvailableTriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    ZapId: 'ZapId',
    ActionName: 'ActionName',
    sortingOrder: 'sortingOrder',
    metadata: 'metadata'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableActionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionScalarFieldEnum = (typeof AvailableActionScalarFieldEnum)[keyof typeof AvailableActionScalarFieldEnum]


  export const ZapRunScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    status: 'status',
    metadata: 'metadata'
  };

  export type ZapRunScalarFieldEnum = (typeof ZapRunScalarFieldEnum)[keyof typeof ZapRunScalarFieldEnum]


  export const ZapRunoutboxScalarFieldEnum: {
    id: 'id',
    zapRunId: 'zapRunId',
    metadata: 'metadata'
  };

  export type ZapRunoutboxScalarFieldEnum = (typeof ZapRunoutboxScalarFieldEnum)[keyof typeof ZapRunoutboxScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    runId: 'runId',
    actionId: 'actionId',
    status: 'status',
    error: 'error'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    zaps?: ZapListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    zaps?: ZapOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    zaps?: ZapListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    userId?: IntFilter<"Zap"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    Runs?: ZapRunListRelationFilter
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    trigger?: TriggerOrderByWithRelationInput
    actions?: ActionOrderByRelationAggregateInput
    Runs?: zapRunOrderByRelationAggregateInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    userId?: IntFilter<"Zap"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    actions?: ActionListRelationFilter
    Runs?: ZapRunListRelationFilter
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: ZapCountOrderByAggregateInput
    _avg?: ZapAvgOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
    _sum?: ZapSumOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
    userId?: IntWithAggregatesFilter<"Zap"> | number
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    metadata?: JsonNullableFilter<"Trigger">
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    type?: AvailableTriggerOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    metadata?: JsonNullableFilter<"Trigger">
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Trigger">
  }

  export type AvailableTriggerWhereInput = {
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    id?: StringFilter<"AvailableTrigger"> | string
    name?: StringFilter<"AvailableTrigger"> | string
    trigger?: TriggerListRelationFilter
  }

  export type AvailableTriggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    trigger?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    trigger?: TriggerListRelationFilter
  }, "id" | "name">

  export type AvailableTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggerCountOrderByAggregateInput
    _max?: AvailableTriggerMaxOrderByAggregateInput
    _min?: AvailableTriggerMinOrderByAggregateInput
  }

  export type AvailableTriggerScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggerScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTrigger"> | string
    name?: StringWithAggregatesFilter<"AvailableTrigger"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    ZapId?: StringFilter<"Action"> | string
    ActionName?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    metadata?: JsonNullableFilter<"Action">
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    Task?: TaskListRelationFilter
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    ZapId?: SortOrder
    ActionName?: SortOrder
    sortingOrder?: SortOrder
    metadata?: SortOrderInput | SortOrder
    type?: AvailableActionOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
    Task?: TaskOrderByRelationAggregateInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    ZapId?: StringFilter<"Action"> | string
    ActionName?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    metadata?: JsonNullableFilter<"Action">
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    Task?: TaskListRelationFilter
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    ZapId?: SortOrder
    ActionName?: SortOrder
    sortingOrder?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    ZapId?: StringWithAggregatesFilter<"Action"> | string
    ActionName?: StringWithAggregatesFilter<"Action"> | string
    sortingOrder?: IntWithAggregatesFilter<"Action"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Action">
  }

  export type AvailableActionWhereInput = {
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    id?: StringFilter<"AvailableAction"> | string
    name?: StringFilter<"AvailableAction"> | string
    action?: ActionListRelationFilter
  }

  export type AvailableActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: ActionOrderByRelationAggregateInput
  }

  export type AvailableActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    action?: ActionListRelationFilter
  }, "id" | "name">

  export type AvailableActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionCountOrderByAggregateInput
    _max?: AvailableActionMaxOrderByAggregateInput
    _min?: AvailableActionMinOrderByAggregateInput
  }

  export type AvailableActionScalarWhereWithAggregatesInput = {
    AND?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    OR?: AvailableActionScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableAction"> | string
    name?: StringWithAggregatesFilter<"AvailableAction"> | string
  }

  export type zapRunWhereInput = {
    AND?: zapRunWhereInput | zapRunWhereInput[]
    OR?: zapRunWhereInput[]
    NOT?: zapRunWhereInput | zapRunWhereInput[]
    id?: StringFilter<"zapRun"> | string
    zapId?: StringFilter<"zapRun"> | string
    status?: StringNullableFilter<"zapRun"> | string | null
    metadata?: JsonNullableFilter<"zapRun">
    Task?: TaskListRelationFilter
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zaprunoutbox?: XOR<ZapRunoutboxNullableScalarRelationFilter, zapRunoutboxWhereInput> | null
  }

  export type zapRunOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    status?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    Task?: TaskOrderByRelationAggregateInput
    zap?: ZapOrderByWithRelationInput
    zaprunoutbox?: zapRunoutboxOrderByWithRelationInput
  }

  export type zapRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: zapRunWhereInput | zapRunWhereInput[]
    OR?: zapRunWhereInput[]
    NOT?: zapRunWhereInput | zapRunWhereInput[]
    zapId?: StringFilter<"zapRun"> | string
    status?: StringNullableFilter<"zapRun"> | string | null
    metadata?: JsonNullableFilter<"zapRun">
    Task?: TaskListRelationFilter
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zaprunoutbox?: XOR<ZapRunoutboxNullableScalarRelationFilter, zapRunoutboxWhereInput> | null
  }, "id">

  export type zapRunOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    status?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: zapRunCountOrderByAggregateInput
    _max?: zapRunMaxOrderByAggregateInput
    _min?: zapRunMinOrderByAggregateInput
  }

  export type zapRunScalarWhereWithAggregatesInput = {
    AND?: zapRunScalarWhereWithAggregatesInput | zapRunScalarWhereWithAggregatesInput[]
    OR?: zapRunScalarWhereWithAggregatesInput[]
    NOT?: zapRunScalarWhereWithAggregatesInput | zapRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zapRun"> | string
    zapId?: StringWithAggregatesFilter<"zapRun"> | string
    status?: StringNullableWithAggregatesFilter<"zapRun"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"zapRun">
  }

  export type zapRunoutboxWhereInput = {
    AND?: zapRunoutboxWhereInput | zapRunoutboxWhereInput[]
    OR?: zapRunoutboxWhereInput[]
    NOT?: zapRunoutboxWhereInput | zapRunoutboxWhereInput[]
    id?: StringFilter<"zapRunoutbox"> | string
    zapRunId?: StringFilter<"zapRunoutbox"> | string
    metadata?: JsonNullableFilter<"zapRunoutbox">
    zaprun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
  }

  export type zapRunoutboxOrderByWithRelationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    zaprun?: zapRunOrderByWithRelationInput
  }

  export type zapRunoutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapRunId?: string
    AND?: zapRunoutboxWhereInput | zapRunoutboxWhereInput[]
    OR?: zapRunoutboxWhereInput[]
    NOT?: zapRunoutboxWhereInput | zapRunoutboxWhereInput[]
    metadata?: JsonNullableFilter<"zapRunoutbox">
    zaprun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
  }, "id" | "zapRunId">

  export type zapRunoutboxOrderByWithAggregationInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: zapRunoutboxCountOrderByAggregateInput
    _max?: zapRunoutboxMaxOrderByAggregateInput
    _min?: zapRunoutboxMinOrderByAggregateInput
  }

  export type zapRunoutboxScalarWhereWithAggregatesInput = {
    AND?: zapRunoutboxScalarWhereWithAggregatesInput | zapRunoutboxScalarWhereWithAggregatesInput[]
    OR?: zapRunoutboxScalarWhereWithAggregatesInput[]
    NOT?: zapRunoutboxScalarWhereWithAggregatesInput | zapRunoutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"zapRunoutbox"> | string
    zapRunId?: StringWithAggregatesFilter<"zapRunoutbox"> | string
    metadata?: JsonNullableWithAggregatesFilter<"zapRunoutbox">
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    runId?: StringFilter<"Task"> | string
    actionId?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    error?: StringNullableFilter<"Task"> | string | null
    zapRun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    runId?: SortOrder
    actionId?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    zapRun?: zapRunOrderByWithRelationInput
    action?: ActionOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    runId?: StringFilter<"Task"> | string
    actionId?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    error?: StringNullableFilter<"Task"> | string | null
    zapRun?: XOR<ZapRunScalarRelationFilter, zapRunWhereInput>
    action?: XOR<ActionScalarRelationFilter, ActionWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    runId?: SortOrder
    actionId?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    runId?: StringWithAggregatesFilter<"Task"> | string
    actionId?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    error?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    zaps?: ZapCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    zaps?: ZapUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    zaps?: ZapUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    zaps?: ZapUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutZapsInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    actions?: ActionCreateNestedManyWithoutZapInput
    Runs?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    userId: number
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    Runs?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    actions?: ActionUpdateManyWithoutZapNestedInput
    Runs?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    Runs?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
    userId: number
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TriggerCreateInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    triggerId: string
    zapId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyInput = {
    id?: string
    triggerId: string
    zapId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AvailableTriggerCreateInput = {
    id?: string
    name: string
    trigger?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUncheckedCreateInput = {
    id?: string
    name: string
    trigger?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: AvailableActionCreateNestedOneWithoutActionInput
    zap: ZapCreateNestedOneWithoutActionsInput
    Task?: TaskCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    ZapId: string
    ActionName: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: AvailableActionUpdateOneRequiredWithoutActionNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput
    Task?: TaskUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapId?: StringFieldUpdateOperationsInput | string
    ActionName?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionCreateManyInput = {
    id?: string
    ZapId: string
    ActionName: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapId?: StringFieldUpdateOperationsInput | string
    ActionName?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AvailableActionCreateInput = {
    id?: string
    name: string
    action?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUncheckedCreateInput = {
    id?: string
    name: string
    action?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type zapRunCreateInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskCreateNestedManyWithoutZapRunInput
    zap: ZapCreateNestedOneWithoutRunsInput
    zaprunoutbox?: zapRunoutboxCreateNestedOneWithoutZaprunInput
  }

  export type zapRunUncheckedCreateInput = {
    id?: string
    zapId: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutZapRunInput
    zaprunoutbox?: zapRunoutboxUncheckedCreateNestedOneWithoutZaprunInput
  }

  export type zapRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUpdateManyWithoutZapRunNestedInput
    zap?: ZapUpdateOneRequiredWithoutRunsNestedInput
    zaprunoutbox?: zapRunoutboxUpdateOneWithoutZaprunNestedInput
  }

  export type zapRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutZapRunNestedInput
    zaprunoutbox?: zapRunoutboxUncheckedUpdateOneWithoutZaprunNestedInput
  }

  export type zapRunCreateManyInput = {
    id?: string
    zapId: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxCreateInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zaprun: zapRunCreateNestedOneWithoutZaprunoutboxInput
  }

  export type zapRunoutboxUncheckedCreateInput = {
    id?: string
    zapRunId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zaprun?: zapRunUpdateOneRequiredWithoutZaprunoutboxNestedInput
  }

  export type zapRunoutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxCreateManyInput = {
    id?: string
    zapRunId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapRunId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateInput = {
    id?: string
    status: string
    error?: string | null
    zapRun: zapRunCreateNestedOneWithoutTaskInput
    action: ActionCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    runId: string
    actionId: string
    status: string
    error?: string | null
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    zapRun?: zapRunUpdateOneRequiredWithoutTaskNestedInput
    action?: ActionUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyInput = {
    id?: string
    runId: string
    actionId: string
    status: string
    error?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ZapListRelationFilter = {
    every?: ZapWhereInput
    some?: ZapWhereInput
    none?: ZapWhereInput
  }

  export type ZapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type ZapRunListRelationFilter = {
    every?: zapRunWhereInput
    some?: zapRunWhereInput
    none?: zapRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type zapRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ZapAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ZapSumOrderByAggregateInput = {
    userId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AvailableTriggerScalarRelationFilter = {
    is?: AvailableTriggerWhereInput
    isNot?: AvailableTriggerWhereInput
  }

  export type ZapScalarRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    zapId?: SortOrder
    metadata?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    zapId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    zapId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionScalarRelationFilter = {
    is?: AvailableActionWhereInput
    isNot?: AvailableActionWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    ZapId?: SortOrder
    ActionName?: SortOrder
    sortingOrder?: SortOrder
    metadata?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    ZapId?: SortOrder
    ActionName?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    ZapId?: SortOrder
    ActionName?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type AvailableActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ZapRunoutboxNullableScalarRelationFilter = {
    is?: zapRunoutboxWhereInput | null
    isNot?: zapRunoutboxWhereInput | null
  }

  export type zapRunCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
  }

  export type zapRunMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    status?: SortOrder
  }

  export type zapRunMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    status?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ZapRunScalarRelationFilter = {
    is?: zapRunWhereInput
    isNot?: zapRunWhereInput
  }

  export type zapRunoutboxCountOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
    metadata?: SortOrder
  }

  export type zapRunoutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type zapRunoutboxMinOrderByAggregateInput = {
    id?: SortOrder
    zapRunId?: SortOrder
  }

  export type ActionScalarRelationFilter = {
    is?: ActionWhereInput
    isNot?: ActionWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    actionId?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    actionId?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    runId?: SortOrder
    actionId?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type ZapCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type ZapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ZapUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ZapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput> | ZapCreateWithoutUserInput[] | ZapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ZapCreateOrConnectWithoutUserInput | ZapCreateOrConnectWithoutUserInput[]
    upsert?: ZapUpsertWithWhereUniqueWithoutUserInput | ZapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ZapCreateManyUserInputEnvelope
    set?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    disconnect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    delete?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    connect?: ZapWhereUniqueInput | ZapWhereUniqueInput[]
    update?: ZapUpdateWithWhereUniqueWithoutUserInput | ZapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ZapUpdateManyWithWhereWithoutUserInput | ZapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ZapScalarWhereInput | ZapScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutZapsInput = {
    create?: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapsInput
    connect?: UserWhereUniqueInput
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type zapRunCreateNestedManyWithoutZapInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type zapRunUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutZapsNestedInput = {
    create?: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutZapsInput
    upsert?: UserUpsertWithoutZapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutZapsInput, UserUpdateWithoutZapsInput>, UserUncheckedUpdateWithoutZapsInput>
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type zapRunUpdateManyWithoutZapNestedInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    upsert?: zapRunUpsertWithWhereUniqueWithoutZapInput | zapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    set?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    disconnect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    delete?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    update?: zapRunUpdateWithWhereUniqueWithoutZapInput | zapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: zapRunUpdateManyWithWhereWithoutZapInput | zapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput> | ActionCreateWithoutZapInput[] | ActionUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutZapInput | ActionCreateOrConnectWithoutZapInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutZapInput | ActionUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionCreateManyZapInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutZapInput | ActionUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutZapInput | ActionUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type zapRunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput> | zapRunCreateWithoutZapInput[] | zapRunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: zapRunCreateOrConnectWithoutZapInput | zapRunCreateOrConnectWithoutZapInput[]
    upsert?: zapRunUpsertWithWhereUniqueWithoutZapInput | zapRunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: zapRunCreateManyZapInputEnvelope
    set?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    disconnect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    delete?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    connect?: zapRunWhereUniqueInput | zapRunWhereUniqueInput[]
    update?: zapRunUpdateWithWhereUniqueWithoutZapInput | zapRunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: zapRunUpdateManyWithWhereWithoutZapInput | zapRunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
  }

  export type AvailableTriggerCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    upsert?: AvailableTriggerUpsertWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput, AvailableTriggerUpdateWithoutTriggerInput>, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type AvailableActionCreateNestedOneWithoutActionInput = {
    create?: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionInput
    connect?: AvailableActionWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionsInput = {
    create?: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput
    connect?: ZapWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutActionInput = {
    create?: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput> | TaskCreateWithoutActionInput[] | TaskUncheckedCreateWithoutActionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutActionInput | TaskCreateOrConnectWithoutActionInput[]
    createMany?: TaskCreateManyActionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput> | TaskCreateWithoutActionInput[] | TaskUncheckedCreateWithoutActionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutActionInput | TaskCreateOrConnectWithoutActionInput[]
    createMany?: TaskCreateManyActionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type AvailableActionUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionInput
    upsert?: AvailableActionUpsertWithoutActionInput
    connect?: AvailableActionWhereUniqueInput
    update?: XOR<XOR<AvailableActionUpdateToOneWithWhereWithoutActionInput, AvailableActionUpdateWithoutActionInput>, AvailableActionUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionsInput
    upsert?: ZapUpsertWithoutActionsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionsInput, ZapUpdateWithoutActionsInput>, ZapUncheckedUpdateWithoutActionsInput>
  }

  export type TaskUpdateManyWithoutActionNestedInput = {
    create?: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput> | TaskCreateWithoutActionInput[] | TaskUncheckedCreateWithoutActionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutActionInput | TaskCreateOrConnectWithoutActionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutActionInput | TaskUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: TaskCreateManyActionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutActionInput | TaskUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutActionInput | TaskUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput> | TaskCreateWithoutActionInput[] | TaskUncheckedCreateWithoutActionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutActionInput | TaskCreateOrConnectWithoutActionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutActionInput | TaskUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: TaskCreateManyActionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutActionInput | TaskUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutActionInput | TaskUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutZapRunInput = {
    create?: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput> | TaskCreateWithoutZapRunInput[] | TaskUncheckedCreateWithoutZapRunInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutZapRunInput | TaskCreateOrConnectWithoutZapRunInput[]
    createMany?: TaskCreateManyZapRunInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ZapCreateNestedOneWithoutRunsInput = {
    create?: XOR<ZapCreateWithoutRunsInput, ZapUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutRunsInput
    connect?: ZapWhereUniqueInput
  }

  export type zapRunoutboxCreateNestedOneWithoutZaprunInput = {
    create?: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: zapRunoutboxCreateOrConnectWithoutZaprunInput
    connect?: zapRunoutboxWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutZapRunInput = {
    create?: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput> | TaskCreateWithoutZapRunInput[] | TaskUncheckedCreateWithoutZapRunInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutZapRunInput | TaskCreateOrConnectWithoutZapRunInput[]
    createMany?: TaskCreateManyZapRunInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type zapRunoutboxUncheckedCreateNestedOneWithoutZaprunInput = {
    create?: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: zapRunoutboxCreateOrConnectWithoutZaprunInput
    connect?: zapRunoutboxWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TaskUpdateManyWithoutZapRunNestedInput = {
    create?: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput> | TaskCreateWithoutZapRunInput[] | TaskUncheckedCreateWithoutZapRunInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutZapRunInput | TaskCreateOrConnectWithoutZapRunInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutZapRunInput | TaskUpsertWithWhereUniqueWithoutZapRunInput[]
    createMany?: TaskCreateManyZapRunInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutZapRunInput | TaskUpdateWithWhereUniqueWithoutZapRunInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutZapRunInput | TaskUpdateManyWithWhereWithoutZapRunInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ZapUpdateOneRequiredWithoutRunsNestedInput = {
    create?: XOR<ZapCreateWithoutRunsInput, ZapUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ZapCreateOrConnectWithoutRunsInput
    upsert?: ZapUpsertWithoutRunsInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutRunsInput, ZapUpdateWithoutRunsInput>, ZapUncheckedUpdateWithoutRunsInput>
  }

  export type zapRunoutboxUpdateOneWithoutZaprunNestedInput = {
    create?: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: zapRunoutboxCreateOrConnectWithoutZaprunInput
    upsert?: zapRunoutboxUpsertWithoutZaprunInput
    disconnect?: zapRunoutboxWhereInput | boolean
    delete?: zapRunoutboxWhereInput | boolean
    connect?: zapRunoutboxWhereUniqueInput
    update?: XOR<XOR<zapRunoutboxUpdateToOneWithWhereWithoutZaprunInput, zapRunoutboxUpdateWithoutZaprunInput>, zapRunoutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type TaskUncheckedUpdateManyWithoutZapRunNestedInput = {
    create?: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput> | TaskCreateWithoutZapRunInput[] | TaskUncheckedCreateWithoutZapRunInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutZapRunInput | TaskCreateOrConnectWithoutZapRunInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutZapRunInput | TaskUpsertWithWhereUniqueWithoutZapRunInput[]
    createMany?: TaskCreateManyZapRunInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutZapRunInput | TaskUpdateWithWhereUniqueWithoutZapRunInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutZapRunInput | TaskUpdateManyWithWhereWithoutZapRunInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type zapRunoutboxUncheckedUpdateOneWithoutZaprunNestedInput = {
    create?: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: zapRunoutboxCreateOrConnectWithoutZaprunInput
    upsert?: zapRunoutboxUpsertWithoutZaprunInput
    disconnect?: zapRunoutboxWhereInput | boolean
    delete?: zapRunoutboxWhereInput | boolean
    connect?: zapRunoutboxWhereUniqueInput
    update?: XOR<XOR<zapRunoutboxUpdateToOneWithWhereWithoutZaprunInput, zapRunoutboxUpdateWithoutZaprunInput>, zapRunoutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type zapRunCreateNestedOneWithoutZaprunoutboxInput = {
    create?: XOR<zapRunCreateWithoutZaprunoutboxInput, zapRunUncheckedCreateWithoutZaprunoutboxInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutZaprunoutboxInput
    connect?: zapRunWhereUniqueInput
  }

  export type zapRunUpdateOneRequiredWithoutZaprunoutboxNestedInput = {
    create?: XOR<zapRunCreateWithoutZaprunoutboxInput, zapRunUncheckedCreateWithoutZaprunoutboxInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutZaprunoutboxInput
    upsert?: zapRunUpsertWithoutZaprunoutboxInput
    connect?: zapRunWhereUniqueInput
    update?: XOR<XOR<zapRunUpdateToOneWithWhereWithoutZaprunoutboxInput, zapRunUpdateWithoutZaprunoutboxInput>, zapRunUncheckedUpdateWithoutZaprunoutboxInput>
  }

  export type zapRunCreateNestedOneWithoutTaskInput = {
    create?: XOR<zapRunCreateWithoutTaskInput, zapRunUncheckedCreateWithoutTaskInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutTaskInput
    connect?: zapRunWhereUniqueInput
  }

  export type ActionCreateNestedOneWithoutTaskInput = {
    create?: XOR<ActionCreateWithoutTaskInput, ActionUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ActionCreateOrConnectWithoutTaskInput
    connect?: ActionWhereUniqueInput
  }

  export type zapRunUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<zapRunCreateWithoutTaskInput, zapRunUncheckedCreateWithoutTaskInput>
    connectOrCreate?: zapRunCreateOrConnectWithoutTaskInput
    upsert?: zapRunUpsertWithoutTaskInput
    connect?: zapRunWhereUniqueInput
    update?: XOR<XOR<zapRunUpdateToOneWithWhereWithoutTaskInput, zapRunUpdateWithoutTaskInput>, zapRunUncheckedUpdateWithoutTaskInput>
  }

  export type ActionUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<ActionCreateWithoutTaskInput, ActionUncheckedCreateWithoutTaskInput>
    connectOrCreate?: ActionCreateOrConnectWithoutTaskInput
    upsert?: ActionUpsertWithoutTaskInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutTaskInput, ActionUpdateWithoutTaskInput>, ActionUncheckedUpdateWithoutTaskInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ZapCreateWithoutUserInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    actions?: ActionCreateNestedManyWithoutZapInput
    Runs?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutUserInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    Runs?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutUserInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapCreateManyUserInputEnvelope = {
    data: ZapCreateManyUserInput | ZapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ZapUpsertWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    update: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
    create: XOR<ZapCreateWithoutUserInput, ZapUncheckedCreateWithoutUserInput>
  }

  export type ZapUpdateWithWhereUniqueWithoutUserInput = {
    where: ZapWhereUniqueInput
    data: XOR<ZapUpdateWithoutUserInput, ZapUncheckedUpdateWithoutUserInput>
  }

  export type ZapUpdateManyWithWhereWithoutUserInput = {
    where: ZapScalarWhereInput
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyWithoutUserInput>
  }

  export type ZapScalarWhereInput = {
    AND?: ZapScalarWhereInput | ZapScalarWhereInput[]
    OR?: ZapScalarWhereInput[]
    NOT?: ZapScalarWhereInput | ZapScalarWhereInput[]
    id?: StringFilter<"Zap"> | string
    userId?: IntFilter<"Zap"> | number
  }

  export type UserCreateWithoutZapsInput = {
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutZapsInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutZapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    triggerId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateWithoutZapInput = {
    id?: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: AvailableActionCreateNestedOneWithoutActionInput
    Task?: TaskCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutZapInput = {
    id?: string
    ActionName: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutZapInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionCreateManyZapInputEnvelope = {
    data: ActionCreateManyZapInput | ActionCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type zapRunCreateWithoutZapInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskCreateNestedManyWithoutZapRunInput
    zaprunoutbox?: zapRunoutboxCreateNestedOneWithoutZaprunInput
  }

  export type zapRunUncheckedCreateWithoutZapInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutZapRunInput
    zaprunoutbox?: zapRunoutboxUncheckedCreateNestedOneWithoutZaprunInput
  }

  export type zapRunCreateOrConnectWithoutZapInput = {
    where: zapRunWhereUniqueInput
    create: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput>
  }

  export type zapRunCreateManyZapInputEnvelope = {
    data: zapRunCreateManyZapInput | zapRunCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutZapsInput = {
    update: XOR<UserUpdateWithoutZapsInput, UserUncheckedUpdateWithoutZapsInput>
    create: XOR<UserCreateWithoutZapsInput, UserUncheckedCreateWithoutZapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutZapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutZapsInput, UserUncheckedUpdateWithoutZapsInput>
  }

  export type UserUpdateWithoutZapsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutZapsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
    create: XOR<ActionCreateWithoutZapInput, ActionUncheckedCreateWithoutZapInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutZapInput, ActionUncheckedUpdateWithoutZapInput>
  }

  export type ActionUpdateManyWithWhereWithoutZapInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    ZapId?: StringFilter<"Action"> | string
    ActionName?: StringFilter<"Action"> | string
    sortingOrder?: IntFilter<"Action"> | number
    metadata?: JsonNullableFilter<"Action">
  }

  export type zapRunUpsertWithWhereUniqueWithoutZapInput = {
    where: zapRunWhereUniqueInput
    update: XOR<zapRunUpdateWithoutZapInput, zapRunUncheckedUpdateWithoutZapInput>
    create: XOR<zapRunCreateWithoutZapInput, zapRunUncheckedCreateWithoutZapInput>
  }

  export type zapRunUpdateWithWhereUniqueWithoutZapInput = {
    where: zapRunWhereUniqueInput
    data: XOR<zapRunUpdateWithoutZapInput, zapRunUncheckedUpdateWithoutZapInput>
  }

  export type zapRunUpdateManyWithWhereWithoutZapInput = {
    where: zapRunScalarWhereInput
    data: XOR<zapRunUpdateManyMutationInput, zapRunUncheckedUpdateManyWithoutZapInput>
  }

  export type zapRunScalarWhereInput = {
    AND?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
    OR?: zapRunScalarWhereInput[]
    NOT?: zapRunScalarWhereInput | zapRunScalarWhereInput[]
    id?: StringFilter<"zapRun"> | string
    zapId?: StringFilter<"zapRun"> | string
    status?: StringNullableFilter<"zapRun"> | string | null
    metadata?: JsonNullableFilter<"zapRun">
  }

  export type AvailableTriggerCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerCreateOrConnectWithoutTriggerInput = {
    where: AvailableTriggerWhereUniqueInput
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    user: UserCreateNestedOneWithoutZapsInput
    actions?: ActionCreateNestedManyWithoutZapInput
    Runs?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    userId: number
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
    Runs?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggerUpsertWithoutTriggerInput = {
    update: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    where?: AvailableTriggerWhereInput
  }

  export type AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AvailableTriggerWhereInput
    data: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableTriggerUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    actions?: ActionUpdateManyWithoutZapNestedInput
    Runs?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    Runs?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    zapId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    metadata?: JsonNullableFilter<"Trigger">
  }

  export type AvailableActionCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionUncheckedCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionCreateOrConnectWithoutActionInput = {
    where: AvailableActionWhereUniqueInput
    create: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
  }

  export type ZapCreateWithoutActionsInput = {
    id?: string
    user: UserCreateNestedOneWithoutZapsInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    Runs?: zapRunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutActionsInput = {
    id?: string
    userId: number
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    Runs?: zapRunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
  }

  export type TaskCreateWithoutActionInput = {
    id?: string
    status: string
    error?: string | null
    zapRun: zapRunCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutActionInput = {
    id?: string
    runId: string
    status: string
    error?: string | null
  }

  export type TaskCreateOrConnectWithoutActionInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput>
  }

  export type TaskCreateManyActionInputEnvelope = {
    data: TaskCreateManyActionInput | TaskCreateManyActionInput[]
    skipDuplicates?: boolean
  }

  export type AvailableActionUpsertWithoutActionInput = {
    update: XOR<AvailableActionUpdateWithoutActionInput, AvailableActionUncheckedUpdateWithoutActionInput>
    create: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    where?: AvailableActionWhereInput
  }

  export type AvailableActionUpdateToOneWithWhereWithoutActionInput = {
    where?: AvailableActionWhereInput
    data: XOR<AvailableActionUpdateWithoutActionInput, AvailableActionUncheckedUpdateWithoutActionInput>
  }

  export type AvailableActionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutActionsInput = {
    update: XOR<ZapUpdateWithoutActionsInput, ZapUncheckedUpdateWithoutActionsInput>
    create: XOR<ZapCreateWithoutActionsInput, ZapUncheckedCreateWithoutActionsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionsInput, ZapUncheckedUpdateWithoutActionsInput>
  }

  export type ZapUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    Runs?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    Runs?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutActionInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutActionInput, TaskUncheckedUpdateWithoutActionInput>
    create: XOR<TaskCreateWithoutActionInput, TaskUncheckedCreateWithoutActionInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutActionInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutActionInput, TaskUncheckedUpdateWithoutActionInput>
  }

  export type TaskUpdateManyWithWhereWithoutActionInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutActionInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    runId?: StringFilter<"Task"> | string
    actionId?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    error?: StringNullableFilter<"Task"> | string | null
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutActionsInput
    Task?: TaskCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    ZapId: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type TaskCreateWithoutZapRunInput = {
    id?: string
    status: string
    error?: string | null
    action: ActionCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutZapRunInput = {
    id?: string
    actionId: string
    status: string
    error?: string | null
  }

  export type TaskCreateOrConnectWithoutZapRunInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput>
  }

  export type TaskCreateManyZapRunInputEnvelope = {
    data: TaskCreateManyZapRunInput | TaskCreateManyZapRunInput[]
    skipDuplicates?: boolean
  }

  export type ZapCreateWithoutRunsInput = {
    id?: string
    user: UserCreateNestedOneWithoutZapsInput
    trigger?: TriggerCreateNestedOneWithoutZapInput
    actions?: ActionCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutRunsInput = {
    id?: string
    userId: number
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    actions?: ActionUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutRunsInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutRunsInput, ZapUncheckedCreateWithoutRunsInput>
  }

  export type zapRunoutboxCreateWithoutZaprunInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxUncheckedCreateWithoutZaprunInput = {
    id?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxCreateOrConnectWithoutZaprunInput = {
    where: zapRunoutboxWhereUniqueInput
    create: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutZapRunInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutZapRunInput, TaskUncheckedUpdateWithoutZapRunInput>
    create: XOR<TaskCreateWithoutZapRunInput, TaskUncheckedCreateWithoutZapRunInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutZapRunInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutZapRunInput, TaskUncheckedUpdateWithoutZapRunInput>
  }

  export type TaskUpdateManyWithWhereWithoutZapRunInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutZapRunInput>
  }

  export type ZapUpsertWithoutRunsInput = {
    update: XOR<ZapUpdateWithoutRunsInput, ZapUncheckedUpdateWithoutRunsInput>
    create: XOR<ZapCreateWithoutRunsInput, ZapUncheckedCreateWithoutRunsInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutRunsInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutRunsInput, ZapUncheckedUpdateWithoutRunsInput>
  }

  export type ZapUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutZapsNestedInput
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    actions?: ActionUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
  }

  export type zapRunoutboxUpsertWithoutZaprunInput = {
    update: XOR<zapRunoutboxUpdateWithoutZaprunInput, zapRunoutboxUncheckedUpdateWithoutZaprunInput>
    create: XOR<zapRunoutboxCreateWithoutZaprunInput, zapRunoutboxUncheckedCreateWithoutZaprunInput>
    where?: zapRunoutboxWhereInput
  }

  export type zapRunoutboxUpdateToOneWithWhereWithoutZaprunInput = {
    where?: zapRunoutboxWhereInput
    data: XOR<zapRunoutboxUpdateWithoutZaprunInput, zapRunoutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type zapRunoutboxUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunoutboxUncheckedUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunCreateWithoutZaprunoutboxInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskCreateNestedManyWithoutZapRunInput
    zap: ZapCreateNestedOneWithoutRunsInput
  }

  export type zapRunUncheckedCreateWithoutZaprunoutboxInput = {
    id?: string
    zapId: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedCreateNestedManyWithoutZapRunInput
  }

  export type zapRunCreateOrConnectWithoutZaprunoutboxInput = {
    where: zapRunWhereUniqueInput
    create: XOR<zapRunCreateWithoutZaprunoutboxInput, zapRunUncheckedCreateWithoutZaprunoutboxInput>
  }

  export type zapRunUpsertWithoutZaprunoutboxInput = {
    update: XOR<zapRunUpdateWithoutZaprunoutboxInput, zapRunUncheckedUpdateWithoutZaprunoutboxInput>
    create: XOR<zapRunCreateWithoutZaprunoutboxInput, zapRunUncheckedCreateWithoutZaprunoutboxInput>
    where?: zapRunWhereInput
  }

  export type zapRunUpdateToOneWithWhereWithoutZaprunoutboxInput = {
    where?: zapRunWhereInput
    data: XOR<zapRunUpdateWithoutZaprunoutboxInput, zapRunUncheckedUpdateWithoutZaprunoutboxInput>
  }

  export type zapRunUpdateWithoutZaprunoutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUpdateManyWithoutZapRunNestedInput
    zap?: ZapUpdateOneRequiredWithoutRunsNestedInput
  }

  export type zapRunUncheckedUpdateWithoutZaprunoutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutZapRunNestedInput
  }

  export type zapRunCreateWithoutTaskInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutRunsInput
    zaprunoutbox?: zapRunoutboxCreateNestedOneWithoutZaprunInput
  }

  export type zapRunUncheckedCreateWithoutTaskInput = {
    id?: string
    zapId: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zaprunoutbox?: zapRunoutboxUncheckedCreateNestedOneWithoutZaprunInput
  }

  export type zapRunCreateOrConnectWithoutTaskInput = {
    where: zapRunWhereUniqueInput
    create: XOR<zapRunCreateWithoutTaskInput, zapRunUncheckedCreateWithoutTaskInput>
  }

  export type ActionCreateWithoutTaskInput = {
    id?: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: AvailableActionCreateNestedOneWithoutActionInput
    zap: ZapCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutTaskInput = {
    id?: string
    ZapId: string
    ActionName: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionCreateOrConnectWithoutTaskInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTaskInput, ActionUncheckedCreateWithoutTaskInput>
  }

  export type zapRunUpsertWithoutTaskInput = {
    update: XOR<zapRunUpdateWithoutTaskInput, zapRunUncheckedUpdateWithoutTaskInput>
    create: XOR<zapRunCreateWithoutTaskInput, zapRunUncheckedCreateWithoutTaskInput>
    where?: zapRunWhereInput
  }

  export type zapRunUpdateToOneWithWhereWithoutTaskInput = {
    where?: zapRunWhereInput
    data: XOR<zapRunUpdateWithoutTaskInput, zapRunUncheckedUpdateWithoutTaskInput>
  }

  export type zapRunUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutRunsNestedInput
    zaprunoutbox?: zapRunoutboxUpdateOneWithoutZaprunNestedInput
  }

  export type zapRunUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zaprunoutbox?: zapRunoutboxUncheckedUpdateOneWithoutZaprunNestedInput
  }

  export type ActionUpsertWithoutTaskInput = {
    update: XOR<ActionUpdateWithoutTaskInput, ActionUncheckedUpdateWithoutTaskInput>
    create: XOR<ActionCreateWithoutTaskInput, ActionUncheckedCreateWithoutTaskInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutTaskInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutTaskInput, ActionUncheckedUpdateWithoutTaskInput>
  }

  export type ActionUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: AvailableActionUpdateOneRequiredWithoutActionNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapId?: StringFieldUpdateOperationsInput | string
    ActionName?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ZapCreateManyUserInput = {
    id?: string
  }

  export type ZapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    actions?: ActionUpdateManyWithoutZapNestedInput
    Runs?: zapRunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    actions?: ActionUncheckedUpdateManyWithoutZapNestedInput
    Runs?: zapRunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyZapInput = {
    id?: string
    ActionName: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunCreateManyZapInput = {
    id?: string
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: AvailableActionUpdateOneRequiredWithoutActionNestedInput
    Task?: TaskUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    ActionName?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    ActionName?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type zapRunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUpdateManyWithoutZapRunNestedInput
    zaprunoutbox?: zapRunoutboxUpdateOneWithoutZaprunNestedInput
  }

  export type zapRunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutZapRunNestedInput
    zaprunoutbox?: zapRunoutboxUncheckedUpdateOneWithoutZaprunNestedInput
  }

  export type zapRunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    zapId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateManyActionInput = {
    id?: string
    runId: string
    status: string
    error?: string | null
  }

  export type TaskUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    zapRun?: zapRunUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    runId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    ZapId: string
    sortingOrder?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutActionsNestedInput
    Task?: TaskUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Task?: TaskUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    ZapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateManyZapRunInput = {
    id?: string
    actionId: string
    status: string
    error?: string | null
  }

  export type TaskUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    action?: ActionUpdateOneRequiredWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutZapRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}