from fastapi import FastAPI

app = FastAPI(title="Example1 FastAPI")


@app.get("/")
def root():
    return {"message": "Hello from Example1 FastAPI"}


@app.get("/healthz")
def healthz():
    return {"status": "ok"}


@app.get("/api/items/{item_id}")
def get_item(item_id: int):
    return {"id": item_id, "name": f"item-{item_id}"}
