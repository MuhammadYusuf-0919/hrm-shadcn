import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { UserAuthForm } from '@/pages/login/components/user-auth-form';

function Login() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div
          style={{ backgroundImage: `url('/public/assets/images/login.jpg')` }}
          className="relative h-full hidden flex-col bg-muted p-10 lg:flex dark:border-r bg-cover bg-no-repeat bg-center"
        >
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="h-full flex items-center lg:p-8">
          <Card className="w-[90%] lg:w-[60%] m-auto bg-white dark:bg-card p-2 md:p-4">
            <CardHeader className="space-y-1 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="w-8 h-8 text-lg rounded-full bg-primary text-white font-bold flex items-center justify-center">
                  h
                </span>
                <CardTitle className="text-2xl">Hrm</CardTitle>
              </div>
              <CardDescription className="text-bold text-lg">
                Login first to your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <UserAuthForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
export default Login;
