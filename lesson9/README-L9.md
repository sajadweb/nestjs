1. NestJS Config Module: Using environment variables
```sh
npm i --save @nestjs/config
```
app.ts
```ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
  }),
  ],
})
export class AppModule {}
```
1.  Generate a new library within a monorepo 
```bash
nest g lib tools
nest g lib common
nest g lib interface
```
2. name?
```bash
? What prefix would you like to use for the library (default: @app)? @libs
```
3. files
```cmd
CREATE libs/common/tsconfig.lib.json (220 bytes)
CREATE libs/common/src/index.ts (67 bytes)
//delete
CREATE libs/common/src/common.module.ts (192 bytes)
CREATE libs/common/src/common.service.spec.ts (460 bytes)
CREATE libs/common/src/common.service.ts (90 bytes)

UPDATE nest-cli.json (446 bytes)
UPDATE package.json (2514 bytes)
UPDATE test/jest-e2e.json (338 bytes)
UPDATE tsconfig.json (690 bytes) 
```
1. add schema
 1.1. create folder schema in @libs
 1.2. create folder src in schema
 1.3. create tsconfig.lib.json in schema
 1.4. create file index.ts in src
 ```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "outDir": "../../dist/libs/common"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test", "**/*spec.ts"]
}
```

1.5. add config   in nest-cli  projects
```json
 "schema": {
      "type": "library",
      "root": "libs/schema",
      "entryFile": "index",
      "sourceRoot": "libs/schema/src",
      "compilerOptions": {
        "tsConfigPath": "libs/schema/tsconfig.lib.json"
      }
    }
```
1.6. update config in package.json
```json
  "moduleNameMapper": {
    "^@libs/common(|/.*)$": "<rootDir>/libs/common/src/$1",
    "^@libs/schema(|/.*)$": "<rootDir>/libs/schema/src/$1"
  }
```
  1.8. change tsconfig.json
    ```json
    "paths": {
      "@libs/common": [
        "libs/common/src"
      ],
      "@libs/common/*": [
        "libs/common/src/*"
      ],
      "@libs/schema": [
        "libs/schema/src"
      ],
      "@libs/schema/*": [
        "libs/schema/src/*"
      ]
    }
    ```
## microservice
```cmd
nest g app UserMicro
```