# Audible clone (open source)

We are going to create a pr. You need to know basic git and github commands to make a pr. If you don't know about it, check my [Git and Github crash course](https://medium.com/geekculture/git-and-github-crash-course-b44f4885ff66 "Git and Github crash course")

Click on fork in the top left corner of your screen. Clone the repo you have been redirected to

```bash
git clone url_redirected_to
```

### Installing dependencies

If you use yarn then run

```bash
yarn install
```

and if you use npm delete yarn.lock and run

```bash
npm install
```

### Creating a new branch

```bash
git checkout -b new-feature
```

### Starting server

If you are using yarn then run

```bash
yarn dev
```

and if you using npm run

```bash
npm run dev
```

You can use some accounts to test your features.

## Submitting the new features.

### Setting up next auth

If you don't know about next auth follow this
[tutorial](https://medium.com/geekculture/why-and-how-to-get-started-with-next-auth-61740558b45b "Next auth crash course")
tutorial and get your credentials.
And your .env.local file will look like this

```bash
GOOGLE_CLIENT_ID=client_id
GOOGLE_CLIENT_SECRET=client_secret
NEXTAUTH_URL=http://localhost:3000/
```

### Pushing the code to Github

```bash
git add .
git commit -m "commit message (what you added)"
git push origin new-feature
```

In github if you refresh the page.

- You can see a button Compare and Pull request.
- Click on that button.

Now just add a title and description and create a pull request.

You have successfully created a pull request and I will review and merge it soon.
