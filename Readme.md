# Hyperledger Besu Demo repository

## Run nodes
Node JSON-RPC endpoints:

    1. http://localhost:20000 -> node-1
    2. http://localhost:20001 -> node-2
    2. http://localhost:20003 -> node-3

### Run nodes
    docker-compose up

## [Blockchain Explorer](https://besu.hyperledger.org/stable/private-networks/how-to/monitor/sirato-explorer)

### Run explorer
    PORT=5001 NODE_ENDPOINT=http://host.docker.internal:20000 docker compose --file ./explorer/sirato-free/docker-compose/docker-compose.yml up

### [Permissioning contract](https://besu.hyperledger.org/stable/private-networks/concepts/permissioning/onchain)
    code ./contracts/permissioning-smart-contracts