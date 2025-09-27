# Random Generator
- A simple react application that serves as a showcase website of simple random number generators. Developers can make use of this as inspiration to create their own random 'object' generators as react pages/components, whether it be a random generator for numbers, words, or other "objects".

# Current Status: WIP Release
- Releasing or publishing as public repo, as working prototype, to move on to other projects for now.
- This remains as a hobby project to be done from time to time.

# Usage
- to try out the frontend web app:
  - open the frontend directory and use npm install / npm ci. **(due to recent npm attacks, use these commands with caution such as disabling pre/postinstall scripts)**.
  - use the command 'npm run dev'
- the backend is not tested for the most part so it is not advisable to open that aspect for now.

# Limitations
- no backend integration, only simulation through falsedb.api.js
- large popups (such as those in generators-manager) can feel buggy
- generators-manager is only for testing/simulation, it does not actually modify backend data

# Directories
- frontend directory: working react webapp through npm install / npm ci. 
  - serves as a working prototype of the project, with no backend connection.
  - uses a mock api / data through falsedb.api.js.
  - contains hooks and WIP components/pages that intends to serve as the frontend-backend connection, but due to lack of installed axios / react-query libraries, it is unused for now. also untested.
- backend directory: WIP api (only generators is technically tested / working using fetch as testing method (see testing folder)).
  - generators api is somewhat tested through local mongodb testing, (using mongoose to add new generators for example).
  - users/auth api is untested due to lack of an installed jwt library. 
    - due to recent npm attacks, backend aspect is *temporarily* halted, future node.js projects will be taking security measures just in case.

# Future todos:
- complete backend integration to frontend + testing
- optional: publish site