import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
} from '@/components/ui/dropdown-menu';
import Iconify from '@/components/iconify';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="relative h-10 w-10 select-none text-amber-400"
        >
          <Iconify icon="radix-icons:bell" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72" align="end" forceMount>
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="w-full">
              <TabsTrigger className="w-1/2" value="all">
                All
              </TabsTrigger>
              <TabsTrigger className="w-1/2" value="unread">
                Unread
              </TabsTrigger>
            </TabsList>
          </div>
          <DropdownMenuSeparator />
          <TabsContent value="all">
            <DropdownMenuRadioGroup>
              <DropdownMenuItem className="gap-4">
                <Avatar>
                  <AvatarImage src="" alt="" />
                  <AvatarFallback>{}</AvatarFallback>
                </Avatar>
                <div>
                  <h4>title</h4>
                  <p>description</p>
                  <span>sana</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuRadioGroup>
          </TabsContent>
          <TabsContent value="unread">
            <DropdownMenuRadioGroup>
              <DropdownMenuItem className="gap-4">
                <Avatar>
                  <AvatarImage src="" alt="" />
                  <AvatarFallback>{}</AvatarFallback>
                </Avatar>
                <div>
                  <h4>title</h4>
                  <p>description</p>
                  <span>sana</span>
                </div>
                <span className="w-3 h-3 bg-blue-500 rounded-full ml-auto" />
              </DropdownMenuItem>
            </DropdownMenuRadioGroup>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Notification;
