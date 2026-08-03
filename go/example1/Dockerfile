FROM golang:1.22-alpine AS build
WORKDIR /src
COPY go.mod ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -trimpath -o /out/example1 ./.

FROM gcr.io/distroless/static:nonroot
WORKDIR /app
COPY --from=build /out/example1 /app/example1
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/app/example1"]
