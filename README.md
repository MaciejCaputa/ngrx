# Ngrx

Generate initial state
```
ng generate @ngrx/schematics:store State \
  --root \
  --module app.module.ts 
```

Generate login feature
```
ng generate feature Login \
  --creators \
  --api true \
  --group true \
  --reducers reducers/index.ts \
  --module app.module.ts 
```

Generate users entity
```
ng generate feature User \
  --creators \
  --api true \
  --group true \
  --reducers reducers/index.ts \
  --module app.module.ts 

ng generate entity User \
  --creators \
  --flat false \
  --reducers reducers/index.ts \
  --module app.module.ts 
```
