# Random Generator
- A simple react application that serves as a showcase website of simple random number generators. Developers can make use of this as inspiration to create their own random 'object' generators as react pages/components, whether it be a random generator for numbers, words, or other "objects".

# Current Status: WIP Release
- Releasing or publishing as public repo, as working prototype, to move on to other projects for now.
- This remains as a hobby project to be done from time to time.

# Directories
- frontend directory: working react webapp through npm install / npm ci. **(due to recent npm attacks, use these commands with caution)**.
  - serves as a working prototype of the project, with no backend connection.
  - uses a mock api / data through falsedb.api.js.
  - has WIP/untested backend pages.
- backend directory: WIP api (only generators is technically tested / working).
  - generators api is somewhat tested through local mongodb testing, (using mongoose to add new generators for example).
  - users/auth api is untested due to lack of an installed jwt library. 
    - due to recent npm attacks, backend aspect is *temporarily* halted, future node.js projects will be taking security measures just in case.
- archived:
  - contains hooks that intends to serve as the frontend-backend connection, but due to lack of installed axios / react-query libraries, it is archived for now. also untested.