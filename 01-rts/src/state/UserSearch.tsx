import { useState } from 'react';

const users = [
    { name: 'Sara', age: 20 },
    { name: 'Alex', age: 27 },
    { name: 'Michael', age: 34 }
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    }

    return (
        <div>
            <h3>User Search</h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search</button>
            <div>
                {user?.name}
                {user?.age}
            </div>
        </div>
    );
};

export default UserSearch;
