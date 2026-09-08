export type AmplifyDependentResourcesAttributes = {
    "function": {
        "apolloserver": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "apolloapi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}