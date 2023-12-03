pipeline {
    agent any

    tools {
        nodejs "NODEJS_HOME"
    }
    
    stages {
        stage('Build and Test') {
            steps {
                script {
                    sh 'npm install'
                    sh 'ng test --no-watch --no-progress'
                    sh 'ng build --prod'
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
