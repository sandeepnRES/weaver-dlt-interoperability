# Compiled Protos for Java and Kotlin

## Steps to publish:

1) Create a Personal Access Token from Github with write/read/delete access to packages.
2) Create a copy of `artifactory.properties.template` as `artifactory.properties`.
3) Replace <GITHUB Email> with your email id for github.
3) Replace <GITHUB Personal Access Token> with your personal access token.
4) Run `make publish` to publish package to github packages.

## Steps to Use with Gradle:

1) Create a Personal Access Token from Github with read access to packages.
2) Create a copy of `artifactory.properties.template` as `artifactory.properties`.
3) Replace <GITHUB Email> with your email id for github.
3) Replace <GITHUB Personal Access Token> with your personal access token.
4) Add this to your build.gradle (change the version accordingly):
```
dependencies {
	compile(group: 'com.weaver', name: 'protos-java-kt', version: "1.2.0")
}
```