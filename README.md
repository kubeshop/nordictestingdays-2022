# Nordic Testing Days Workshop

Time: 13:30 - 15:30 EEST (GMT+3), June 3rd, 2022 - https://sched.co/zanV

### Attendee Preconditions:
- Laptop that can run Kubernetes
- GitHub account with possibility to create public repositories

### Tools that will be installed on local machine during the workshop

If you want to get ahead of things you can install
- Docker / Kubernetes / Kubectl to set up a local k8s cluster
- Cypress
- Postman
- In local cluster:
  - Petstore sample app
  - Testkube
  
## Workshop Steps 

### 1. Install Kubernetes (Minikube or Kind?)

- Install Docker
- Install Kubernetes - one of:
  - Minikube: download / install from https://minikube.sigs.k8s.io/docs/start/
  - Kind: https://kind.sigs.k8s.io/docs/user/quick-start/#installation
  - Docker: enable Kubernetes ?
- Install kubectl: https://kubernetes.io/docs/tasks/tools/
- Test installation with kubectl commands (see readme)

**Backup**: Install kubectl only and download kubeconfig for hosted cluster

- Commands in readme

### 2. Install Demo Application in local cluster

Steps:
1. Apply petstore deployment (from github repo)
2. Set up port-forwarding and access through browser / CURL locally

**Backup**: access demo petstore in hosted cluster

### 3. Install Cypress & Create tests (15 minutes)

Steps:
1. Download and install from cypress.io
2. Create empty folder for tests
3. Create new project
4. Record a simple test for the petstore UI
5. Save test locally
6. (Push to a public github repo if possible)

**Backup**: provide tests in GitHub repo against hosted petstore UI

### 4. Install Postman & Create API Tests (15 minutes)

Steps:

1. Install and run Postman Desktop app
2. Create empty workspace
3. Import Petstore OpenAPI def (?)
4. Create simple test for inventory operation
5. Save collection

**Backup**: provide collection on GitHub against hosted petstore API

### 5. Install Testkube or access hosted Testkube

Steps:
1. Install Testkube - https://kubeshop.github.io/testkube/installing/
2. Run cli commands to validate installation / access
3. Start Testkube dashboard locally

**Backup**: use hosted cluster, skip step 3 above

### 6. Add Tests to Testkube with UI

Steps:
1. Export postman collection and add as test in local dashboard 
2. Add Cypress test from Git repository in local dashboard

**Backup**: create tests in hosted cluster, possibly using provided collection

### 7. Run Tests with Testkube through UI or CLI

Steps:
1. Run Tests in local Testkube using Dashboard or CLI
2. See results in dashboard

**Backup**: run tests in hosted cluster

### 8. Create & Run TestSuite containing both API and UI tests

Steps:
1. Create TestSuite using CLI  
2. Run TestSuite through dashboard or CLI
3. See results

**Backup**: run existing testsuites in hosted cluster

### 9. Schedule test execution from CI/CD - GitHub Action ?

Steps:Demo using GitHub repo and hosted testkube


### 10. Bonus: Add a Loadtest with k6

Steps:
1. Create test for provided k6 script in repository
2. Run test using dashboard or CLI
3. See results


