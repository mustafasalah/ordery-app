import { init } from "@rematch/core";
import { composeWithDevTools } from "remote-redux-devtools";

const store = init({
    name: "Ordery State",
    models: {},
    redux: {
        devtoolComposer: composeWithDevTools({
            realtime: true,
            port: 8000,
        }),
    },
});
