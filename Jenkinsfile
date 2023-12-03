pipeline {
    agent any

    tools {
        nodejs "NODEJS_HOME"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker-compose build"
                }
            }
        }

        stage('Deploy to Docker Container') {
            steps {
                script {
                    sh "docker-compose up"
                }
            }
        }
    }

}
