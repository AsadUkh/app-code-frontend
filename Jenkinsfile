pipeline {
  environment {
    imageRepo = "asadullahkhan/testingfrontend"
    registryCredential = 'docker'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/AsadUkh/app-code-frontend.git', branch: 'master'])
      }
    }
    stage('Build application') {
      steps {
        sh "npm install"
      }
    }
    stage('Building Docker image') {
      steps{
        script {
       dockerImage = docker.build("$imageRepo:${env.BUILD_ID}")
        }
      }
    }
    stage('Push Image to Docker Hub') {
      steps{
        script {
            dockerImage.push()

        }
      }
    }
    // stage('Remove Unused docker image') {
    //   steps{
    //     sh "docker rmi $imagename:$BUILD_NUMBER"
    //      sh "docker rmi $imagename:latest"

    //   }
    // }
  }
}