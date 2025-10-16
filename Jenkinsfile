agent any

environment {
    IMAGE_NAME = "portfolio"
    IMAGE_TAG = "latest"
    REGISTRY = "registry.milasholsting.dk" // Replace with your Docker registry
    REGISTRY_CREDENTIALS = "jenkins-docker-registry"
}

stages{
    stage('Build Image') {
        steps {
            sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."

            sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
        }
    }

    stage('Push Image') {
        steps {
            withCredentials([usernamePassword(credentialsId: REGISTRY_CREDENTIALS, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh "echo $PASSWORD | docker login ${REGISTRY} -u $USERNAME --password-stdin"
                sh "docker push ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }
}
