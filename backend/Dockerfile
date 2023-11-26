FROM python:3.11-alpine

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh

COPY .. .

ENTRYPOINT [ "/app/entrypoint.sh" ]

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]