FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

RUN apk update && \
    apk add --update --no-cache --virtual .tmp-build-deps \
      build-base gcc python3-dev  libffi-dev

COPY requirements.txt requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt

COPY entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh

COPY .. .

ENTRYPOINT [ "/app/entrypoint.sh" ]

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]