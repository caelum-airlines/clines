run: docker/build
	@ docker-compose up -d

stop:
	@ docker-compose down
	
docker/build: 
	@ docker image build -t caelum/clines:latest .

test:
	@ npm test

build: 
	@ npm run build
